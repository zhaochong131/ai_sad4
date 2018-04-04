const Holder = require('the-holder')
const logger = require('simple-json-logger')
const loadItems = require('n3h-load-items')

const itemDefs = loadItems(__dirname + '/items')

async function main () {
  const holder = new Holder({logger})
  await holder.load(itemDefs)
  logger.info('holder started', {pid: process.pid})
}

main().catch((err) => {
  logger.error(err)
  process.exit(1)
})
