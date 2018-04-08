const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

const topics = {
  queryAdSpend: 'action.fb-ad-account.query-ad-spend',
  updateSpend: 'action.ad.update-spend'
}

module.exports = {
  type: 'step',
  need: ['natsEx'],
  serviceName: 'main',
  flowName: 'busy-sitter',
  stepName: 'query-ad-spend',
  follow: {
    step: 'find-busy-sitters',
    case: 'ok'
  },
  validator: buildValidator({
    sitter: {
      adId: Joi.string()
    }
  }),
  emitCases: {ok: 'ok'},
  async handler ({sitter}, message) {
    const {adId} = sitter
    const spend = await message.call(topics.queryAdSpend, {adId})
    await message.call(topics.updateSpend, {adId, spend})
    this.emit.ok({sitter, spend: Number(spend)})
  }
}
