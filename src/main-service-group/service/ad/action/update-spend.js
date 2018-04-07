const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

module.exports = {
  type: 'action',
  need: ['natsEx', 'coll/ad'],
  serviceName: 'ad',
  actionName: 'update-spend',
  validator: buildValidator({
    adId: Joi.string(),
    spend: Joi.number()
  }),
  async handler ({adId, spend}) {
    const {'coll/ad': adColl} = this.items
    await adColl.updateOne(
      {_id: adId},
      {$set: {spend, updatedAt: new Date()}}
    )
  }
}
