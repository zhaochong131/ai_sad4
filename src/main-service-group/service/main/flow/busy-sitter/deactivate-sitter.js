const {ObjectID} = require('mongodb')
const buildStep = require('n3h-step-builder')
const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

const topics = {
  queryAdFields: 'action.fb-ad-account.query-ad-fields',
  deleteCampaign: 'action.fb-ad-account.delete-campaign',
  updateEffectiveStatus: 'action.ad.update-effective-status'
}

const cases = {
  ok: 'ok'
}

module.exports = {
  need: ['natsEx', 'coll/ad', 'coll/father', 'coll/sitter'],
  build: ({natsEx, 'coll/ad': adColl, 'coll/father': fatherColl, 'coll/sitter': sitterColl}) => {
    const stepDefinition = {
      natsEx,
      serviceName: 'main',
      flowName: 'busy-sitter',
      stepName: 'deactivate-sitter',
      validator: buildValidator({
        sitter: {
          _id: Joi.string(),
          adId: Joi.string(),
          fatherId: Joi.string(),
          budget: Joi.number()
        },
        spend: Joi.number()
      }),
      async handler ({sitter, spend}, message) {
        const {_id, adId, fatherId, budget} = sitter

        // return remaining budget
        const remainingBudget = budget - spend
        await fatherColl.updateOne({
          _id: ObjectID(fatherId)
        }, {
          $inc: {budget: remainingBudget}
        })

        // delete campaign
        const ad = await adColl.findOne({_id: adId})
        await message.call(topics.deleteCampaign, {campaignId: ad.campaignId})
        const fbAd = await message.call(topics.queryAdFields, {adId, fields: ['effective_status']})
        await message.call(topics.updateEffectiveStatus, {adId, effectiveStatus: fbAd.effective_status})

        // update sitter status to idle
        await sitterColl.updateOne({_id: ObjectID(_id)}, {
          $set: {status: 'idle'},
          $unset: {
            budget: true,
            adId: true
          }
        })

        this.emit(cases.ok, {sitter})
      }
    }

    buildStep({...stepDefinition, follow: {step: 'check-ad-spend', case: 'overspend'}})
    buildStep({...stepDefinition, follow: {step: 'check-spend-speed', case: 'too-low'}})
  }
}
