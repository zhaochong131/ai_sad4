const buildValidator = require('n3h-joi-validator')
const Joi = require('joi')

module.exports = {
  type: 'action',
  need: ['natsEx', 'coll/ad'],
  serviceName: 'ad',
  actionName: 'set-effective-status',
  validator: buildValidator({
    adId: Joi.string(),
    effectiveStatus: Joi.string()
  }),
  async handler ({adId, effectiveStatus}) {
    const {'coll/ad': adColl} = this.items
    await adColl.updateOne({_id: adId}, {
      $set: {
        effectiveStatus: effectiveStatus
      }
    })
  }
}
