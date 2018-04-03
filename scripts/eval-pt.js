const path = require('path')
const _ = require('lodash')
const moment = require('moment-timezone')
const weighted = require('weighted')
const {inspect} = require('util')
const safeEval = require('safe-eval')
const fs = require('fs')

const relativeFilepath = process.argv[2]
const filepath = path.resolve(process.cwd(), relativeFilepath)
const content = fs.readFileSync(filepath, {encode: 'utf-8'})
const builder = safeEval(content, {module: {}})

console.log(inspect(builder({_, moment, weighted}), null, null))