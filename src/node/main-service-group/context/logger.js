const logger = require('simple-json-logger')

module.exports = {
  build: () => {
    return {
      buildItem ({name}) {
        // as this holder holds a lot of items, we attach its name to its logger to help
        // identify which log was written by which item
        return logger({meta: {item: name}})
      }
    }
  }
}
