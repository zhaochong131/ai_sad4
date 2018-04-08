const Holder = require('the-holder')
const logger = require('simple-json-logger')
const loadItems = require('n3h-load-items')
const path = require('path')

const itemDefs = loadItems({dirname: path.resolve(__dirname, 'items')})

async function main () {
  const holder = new Holder({logger})
  await holder.load(itemDefs)
}

main().catch((err) => {
  logger.error(err)
  process.exit(1)
})
