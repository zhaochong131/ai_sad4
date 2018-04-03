/*
build pts (facebook ad params trees) by given builder string (which should be resolved into a function)
 */

const moment = require('moment-timezone')
const _ = require('lodash')
const safeEval = require('safe-eval')
const weighted = require('weighted')
const expireCache = require('expire-cache')

const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')
const buildAction = require('n3h-action-builder')

// default cache pt builder for 60 seconds
const ptBuilderCache = expireCache.namespace(String(Math.random()), 60)

module.exports = {
  need: ['natsEx'],
  build: ({natsEx}) => {
    buildAction({
      natsEx,
      serviceName: 'pt',
      actionName: 'build-pts',
      validator: buildValidator({
        builder: Joi.string(),
        count: Joi.number().optional().default(1)
      }),
      async handler ({builder: builderString, count}) {
        let builder = ptBuilderCache.get(builderString)
        if (!builder) {
          builder = safeEval(builderString, {module: {}})
          ptBuilderCache.set(builderString, builder)
        }
        const pts = []
        for (let i = 0; i < count; i++) {
          pts.push(builder({_, moment, weighted}))
        }
        return pts
      }
    })
  }
}
