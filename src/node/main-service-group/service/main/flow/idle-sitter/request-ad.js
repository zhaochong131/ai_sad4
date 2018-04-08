const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

module.exports = {
  type: 'step',
  need: ['natsEx'],
  serviceName: 'main',
  flowName: 'idle-sitter',
  stepName: 'request-ad',
  follow: {
    step: 'request-budget',
    case: 'ok'
  },
  validator: buildValidator({
    sitter: {
      motherId: Joi.string()
    },
    budget: Joi.number()
  }),
  emitCases: {
    ok: 'ok',
    failed: 'failed'
  },
  async handler ({sitter, budget}, message) {
    try {
      const adId = await message.call('action.main.request-ad', {motherId: sitter.motherId})
      if (!adId) this.emit.failed({sitter, budget})
      else this.emit.ok({sitter, budget, adId})
    } catch (err) {
      this.emit.failed({sitter, budget})
      throw err
    }
  }
}
