const buildAction = require('n3h-action-builder')
const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

module.exports = {
  need: ['natsEx', 'coll/ad'],
  build: ({natsEx, 'coll/ad': adColl}) => buildAction({
    natsEx,
    serviceName: 'ad',
    actionName: 'update-effective-status',
    validator: buildValidator({
      adId: Joi.string(),
      effectiveStatus: Joi.string()
    }),
    async handler ({adId, effectiveStatus}) {
      await adColl.updateOne(
        {_id: adId},
        {$set: {effectiveStatus, updatedAt: new Date()}}
      )
    }
  })
}
