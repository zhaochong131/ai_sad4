const {ObjectID} = require('mongodb')
const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

module.exports = {
  type: 'step',
  need: ['natsEx', 'coll/sitter'],
  serviceName: 'main',
  flowName: 'idle-sitter',
  stepName: 'activate-sitter',
  follow: {
    step: 'request-ad',
    case: 'ok'
  },
  validator: buildValidator({
    sitter: {
      _id: Joi.string()
    },
    budget: Joi.number(),
    adId: Joi.string()
  }),
  emitCases: {
    ok: 'ok'
  },
  async handler ({sitter, budget, adId}) {
    const {'coll/sitter': sitterColl} = this.items
    await sitterColl.updateOne(
      {_id: ObjectID(sitter._id)},
      {$set: {status: 'busy', adId: adId, budget: budget}}
    )
    this.emit.ok({sitter})
  }
}
