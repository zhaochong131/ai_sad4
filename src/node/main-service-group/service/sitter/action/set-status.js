const {ObjectID} = require('mongodb')
const buildValidator = require('n3h-joi-validator')
const Joi = require('joi')

module.exports = {
  type: 'action',
  need: ['natsEx', 'coll/sitter'],
  serviceName: 'sitter',
  actionName: 'set-status',
  validator: buildValidator({
    sitterId: Joi.string(),
    status: Joi.string()
  }),
  async handler ({sitterId, status}) {
    const {'coll/sitter': sitterColl} = this.items
    await sitterColl.updateOne({_id: ObjectID(sitterId)}, {
      $set: {
        status: status
      }
    })
  }
}
