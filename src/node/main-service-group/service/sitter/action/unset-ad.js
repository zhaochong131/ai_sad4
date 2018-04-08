const {ObjectID} = require('mongodb')
const buildValidator = require('n3h-joi-validator')
const Joi = require('joi')

module.exports = {
  type: 'action',
  need: ['natsEx', 'coll/sitter'],
  serviceName: 'sitter',
  actionName: 'unset-ad',
  validator: buildValidator({
    sitterId: Joi.string()
  }),
  async handler ({sitterId}) {
    const {'coll/sitter': sitterColl} = this.items
    await sitterColl.updateOne({_id: ObjectID(sitterId)}, {
      $unset: {adId: true}
    })
  }
}
