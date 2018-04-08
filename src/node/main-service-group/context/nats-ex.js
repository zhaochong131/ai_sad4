const {connect} = require('nats-ex')
const uuid = require('uuid')

module.exports = {
  need: ['config', 'logger'],
  build: async ({config, logger}) => {
    const {
      natsUrl,
      natsNamespace
    } = config

    // if config namespace to *, it will generate a random namespace
    // this feature is helpful for test, but should not be used in production
    const namespace = natsNamespace === '*' ? uuid.v4() : natsNamespace

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
