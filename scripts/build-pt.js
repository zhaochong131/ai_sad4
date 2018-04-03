const path = require('path')
const _ = require('lodash')
const moment = require('moment-timezone')
const weighted = require('weighted')
const {inspect} = require('util')

const relativeFilepath = process.argv[2]
const filepath = path.resolve(process.cwd(), relativeFilepath)
const builder = require(filepath)

console.log(inspect(builder({_, moment, weighted}), null, null))