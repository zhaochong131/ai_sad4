const buildAction = require('n3h-action-builder')
const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

module.exports = {
  need: ['natsEx', 'coll/ad'],
  build: ({natsEx, 'coll/ad': adColl}) => buildAction({
    natsEx,
    serviceName: 'ad',
    actionName: 'update-spend',
    validator: buildValidator({
      adId: Joi.string(),
      spend: Joi.number()
    }),
    async handler ({adId, spend}) {
      await adColl.updateOne(
        {_id: adId},
        {$set: {spend, updatedAt: new Date()}}
      )
    }
  })
}
