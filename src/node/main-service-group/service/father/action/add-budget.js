const {ObjectID} = require('mongodb')
const buildValidator = require('n3h-joi-validator')
const Joi = require('joi')

module.exports = {
  type: 'action',
  need: ['natsEx', 'coll/father'],
  serviceName: 'father',
  actionName: 'add-budget',
  validator: buildValidator({
    fatherId: Joi.string(),
    amount: Joi.number()
  }),
  emitCases: {
    ok: 'ok'
  },
  async handler ({fatherId, amount}) {
    const {'coll/father': fatherColl} = this.items
    await fatherColl.updateOne({_id: ObjectID(fatherId)}, {
      $inc: {
        budget: amount
      }
    })
    this.emit.ok({fatherId, amount})
  }
}
