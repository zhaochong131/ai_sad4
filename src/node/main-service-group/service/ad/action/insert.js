const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

module.exports = {
  type: 'action',
  need: ['natsEx', 'coll/ad'],
  serviceName: 'ad',
  actionName: 'insert',
  validator: buildValidator({
    _id: Joi.string(),
    adsetId: Joi.string(),
    campaignId: Joi.string(),
    effectiveStatus: Joi.string()
  }),
  async handler ({_id, adsetId, campaignId, effectiveStatus}) {
    const {'coll/ad': adColl} = this.items
    await adColl.insertOne({
      _id,
      adsetId,
      campaignId,
      effectiveStatus,
      createdAt: new Date()
    })
  }
}
