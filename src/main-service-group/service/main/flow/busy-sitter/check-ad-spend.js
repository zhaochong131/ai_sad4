const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

module.exports = {
  type: 'step',
  need: ['natsEx'],
  serviceName: 'main',
  flowName: 'busy-sitter',
  stepName: 'check-ad-spend',
  follow: {
    step: 'query-ad-spend',
    case: 'ok'
  },
  validator: buildValidator({
    sitter: {
      budget: Joi.number(),
      closeBudgetRate: Joi.number()
    },
    spend: Joi.number()
  }),
  emitCases: {
    ok: 'ok',
    overspend: 'overspend'
  },
  async handler ({sitter, spend}) {
    const {budget, closeBudgetRate} = sitter
    const overspend = spend > (budget * closeBudgetRate)
    if (overspend) {
      this.emit.overspend({sitter, spend})
    } else {
      this.emit.ok({sitter, spend})
    }
  }
}
