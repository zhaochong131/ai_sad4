const buildAction = require('n3h-action-builder')
const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

module.exports = {
  need: ['natsEx', 'coll/ad'],
  build: ({natsEx, 'coll/ad': adColl}) => buildAction({
    natsEx,
    serviceName: 'ad',
    actionName: 'insert',
    validator: buildValidator({
      _id: Joi.string(),
      adsetId: Joi.string(),
      campaignId: Joi.string(),
      effectiveStatus: Joi.string()
    }),
    async handler ({_id, adsetId, campaignId, effectiveStatus}) {
      await adColl.insertOne({
        _id,
        adsetId,
        campaignId,
        effectiveStatus,
        createdAt: new Date()
      })
    }
  })
}
