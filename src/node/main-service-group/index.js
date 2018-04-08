const Holder = require('the-holder')
const gracedown = require('grace-down')
const logger = require('simple-json-logger')

const itemDefinitions = require('./lib/item-definitions')
const itemAdapters = require('./lib/item-adapters')

async function main () {
  const holder = new Holder({
    logger: logger,
    adapters: itemAdapters
  })

  await holder.load(itemDefinitions)

  // setup graceful shutdown
  gracedown(async () => {
    logger.info('SIGTERM received, shutting down...')
    await holder.close()
    logger.info('Goodbye')
    process.exit(0)
  })
}

main().catch(err => {
  logger.error(err)
  process.exit(1)
})
