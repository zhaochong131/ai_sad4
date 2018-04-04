const buildStep = require('n3h-step-builder')
const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

module.exports = {
  need: ['natsEx', 'config', 'coll/ad'],
  build: ({natsEx, config, 'coll/ad': adColl}) => buildStep({
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
        adId: Joi.string()
      },
      spend: Joi.number()
    }),
    async handler ({sitter, spend}) {
      const {exemptionTime, minSpendSpeed} = config
      const {adId} = sitter
      const {createdAt} = await adColl.findOne({_id: adId})
      const now = new Date()
      const runTime = (now.getTime() - createdAt.getTime()) / 1000 / 60 / 60 / 24 // runTime is counted in days
      const speed = spend / 100 / runTime
      if (runTime > exemptionTime && speed <= minSpendSpeed) {
        this.emit.okCase('too-low', {sitter, spend})
      } else {
        this.emit.ok({sitter, spend})
      }
    }
  })
}
