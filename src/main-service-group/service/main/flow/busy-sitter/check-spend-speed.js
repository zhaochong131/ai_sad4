const buildStep = require('n3h-step-builder')
const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

const cases = {
  ok: 'ok',
  tooLow: 'too-low'
}

module.exports = {
  need: ['natsEx', 'coll/ad'],
  build: ({natsEx, 'coll/ad': adColl}) => buildStep({
    natsEx,
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
    async handler ({sitter, spend}) {
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
        this.emit(cases.tooLow, {sitter, spend})
      } else {
        this.emit(cases.ok, {sitter, spend})
      }
    }
  })
}
