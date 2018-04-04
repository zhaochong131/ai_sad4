const buildStep = require('n3h-step-builder')
const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

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
        adId: Joi.string()
      },
      spend: Joi.number()
    }),
    async handler ({sitter, spend}) {
      const {adId} = sitter
      const {createdAt} = await adColl.findOne({_id: adId})
      const now = new Date()
      const runTime = now.getTime() - createdAt.getTime()
      const speed = spend / runTime
      const minSpeed = 0 // for the moment, may change in the future
      if (runTime > 12 * 60 * 60 * 1000 && speed <= minSpeed) {
        this.emit.okCase('dying', {sitter, spend})
      } else {
        this.emit.ok({sitter, spend})
      }
    }
  })
}
