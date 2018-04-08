/*
all item definitions on this holder
 */

const path = require('path')
const loadItems = require('n3h-load-items')

const definitions = [
  ...loadItems({
    dirname: path.resolve(__dirname, '../context'),
    filter: (file) => !file.includes('/lib/')
  }),
  ...loadItems({
    dirname: path.resolve(__dirname, '../service'),
    prefix: 'service/',
    filter: (file) => !file.includes('.test.')
  })
]

module.exports = definitions
