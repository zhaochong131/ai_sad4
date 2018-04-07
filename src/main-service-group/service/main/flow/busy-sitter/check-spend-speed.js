const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

module.exports = {
  type: 'step',
  need: ['natsEx', 'coll/ad'],
  serviceName: 'main',
  flowName: 'busy-sitter',
  stepName: 'check-spend-speed',
  follow: {
    step: 'query-ad-spend',
    case: 'ok'
  },
  validator: buildValidator({
    sitter: {
      adId: Joi.string(),
      minSpendSpeed: Joi.number(),
      spendSpeedProtectionTime: Joi.number()
    },
    spend: Joi.number()
  }),
  emitCases: {
    ok: 'ok',
    tooLow: 'too-low'
  },
  async handler ({sitter, spend}) {
    const {'coll/ad': adColl} = this.items
    const {
      adId,
      minSpendSpeed,
      spendSpeedProtectionTime
    } = sitter
    const {createdAt} = await adColl.findOne({_id: adId})
    const now = new Date()
    const runTime = (now - createdAt) / (1000 * 60 * 60) // hours
    const speed = (spend / 100) / runTime // dollars per hour
    if (runTime >= spendSpeedProtectionTime && speed <= minSpendSpeed) {
      this.emit.tooLow({sitter, spend})
    } else {
      this.emit.ok({sitter, spend})
    }
  }
}
