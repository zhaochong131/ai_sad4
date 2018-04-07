/*
return an amount of budget to father
 */

const {ObjectID} = require('mongodb')
const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

module.exports = {
  type: 'action',
  need: ['natsEx', 'coll/father'],
  serviceName: 'main',
  actionName: 'return-budget',
  validator: buildValidator({
    fatherId: Joi.string(),
    amount: Joi.number()
  }),
  async handler ({fatherId, amount}) {
    const {'coll/father': fatherColl} = this.items
    fatherId = ObjectID(fatherId)
    await fatherColl.updateOne({_id: fatherId}, {$inc: {budget: amount}})
  }
}
