/**
 * deactivate a sitter
 * - update sitter status (into idle or disabled)
 * - unset sitter budget
 * - unset sitter ad
 * - return budget (add father budget)
 * - delete ad (campaign)
 * - update ad effective status
 */

const {ObjectID} = require('mongodb')
const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

const topics = {
  setSitterStatus: 'action.sitter.set-status',
  unsetSitterBudget: 'action.sitter.unset-budget',
  unsetSitterAd: 'action.sitter.unset-ad',
  addFatherBudget: 'action.father.add-budget',
  setAdEffectiveStatus: 'action.ad.set-effective-status',
  deleteCampaign: 'action.fb-ad-account.delete-campaign',
  queryAdFields: 'action.fb-ad-account.query-ad-fields'
}

module.exports = {
  type: 'action',
  need: ['natsEx', 'coll/sitter', 'coll/ad'],
  serviceName: 'main',
  actionName: 'deactivate-sitter',
  validator: buildValidator({
    sitterId: Joi.string(),
    status: Joi.string().optional().default('idle')
  }),
  async handler ({sitterId, status}, message) {
    const {
      'coll/sitter': sitterColl,
      'coll/ad': adColl
    } = this.items

    // find data and check business logic
    const sitter = await sitterColl.findOne({_id: ObjectID(sitterId)})
    if (!sitter) {
      throw Object.assign(new Error('cannot find sitter'), {
        details: {sitterId}
      })
    }
    if (sitter.status !== 'busy') {
      throw Object.assign(new Error('sitter is not busy'), {
        details: {sitter}
      })
    }
    const ad = await adColl.findOne({_id: sitter.adId})
    if (!ad) {
      throw Object.assign(new Error('cannot find ad'), {
        details: {sitter}
      })
    }

    // make operations
    await Promise.all([
      message.call(topics.setSitterStatus, {sitterId, status}),
      message.call(topics.unsetSitterBudget, {sitterId}),
      message.call(topics.unsetSitterAd, {sitterId}),
      message.call(topics.addFatherBudget, {fatherId: sitter.fatherId, amount: sitter.budget}),
      message.call(topics.deleteCampaign, {campaignId: ad.campaignId}).then(() => {
        return message.call(topics.queryAdFields, {adId: ad._id, fields: ['effective_status']}).then((fields) => {
          return message.call(topics.setAdEffectiveStatus, {adId: ad._id, effectiveStatus: fields['effective_status']})
        })
      })
    ])
  }
}
