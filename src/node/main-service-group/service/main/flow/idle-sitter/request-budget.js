const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

module.exports = {
  type: 'step',
  need: ['natsEx'],
  serviceName: 'main',
  flowName: 'idle-sitter',
  stepName: 'request-budget',
  follow: {
    step: 'find-idle-sitters',
    case: 'ok'
  },
  validator: buildValidator({
    sitter: {
      fatherId: Joi.string(),
      requestBudget: Joi.number()
    }
  }),
  emitCases: {
    ok: 'ok',
    failed: 'failed'
  },
  async handler ({sitter}, message) {
    const {fatherId, requestBudget} = sitter
    const budget = await message.call('action.main.request-budget', {fatherId, amount: requestBudget})
    if (!budget) {
      this.emit.failed({sitter})
    } else {
      this.emit.ok({sitter, budget})
    }
  }
}
