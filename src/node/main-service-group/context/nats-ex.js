const {connect} = require('nats-ex')
const uuid = require('uuid')

module.exports = {
  need: ['config', 'logger'],
  build: async ({config, logger}) => {
    const {
      natsUrl,
      natsNamespace,
      randomNatsNamespace
    } = config

    const namespace = randomNatsNamespace
      ? uuid.v4()
      : natsNamespace

    const natsEx = await connect({
      url: natsUrl,
      namespace,
      logger
    })

    return {
      item: natsEx,
      stop: () => natsEx.close()
    }
  }
}
