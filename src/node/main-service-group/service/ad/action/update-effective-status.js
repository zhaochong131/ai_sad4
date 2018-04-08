const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

module.exports = {
  type: 'action',
  need: ['natsEx', 'coll/ad'],
  serviceName: 'ad',
  actionName: 'update-effective-status',
  validator: buildValidator({
    adId: Joi.string(),
    effectiveStatus: Joi.string()
  }),
  async handler ({adId, effectiveStatus}) {
    const {'coll/ad': adColl} = this.items
    await adColl.updateOne(
      {_id: adId},
      {$set: {effectiveStatus, updatedAt: new Date()}}
    )
  }
}
