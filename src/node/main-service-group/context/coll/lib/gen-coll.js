const path = require('path')
const uuid = require('uuid')
const _ = require('lodash')

module.exports = function (file) {
  const collConfigKey = _.camelCase(`mongo-coll-${path.parse(file).name}`)
  return {
    need: ['config', 'mongodb'],
    build: async ({config, mongodb}) => {
      return {
        item: mongodb.collection(
          config.randomMongoColl
            ? uuid()
            : config[collConfigKey]
        )
      }
    }
  }
}