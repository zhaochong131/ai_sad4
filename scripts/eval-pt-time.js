const path = require('path')
const _ = require('lodash')
const moment = require('moment-timezone')
const weighted = require('weighted')
const safeEval = require('safe-eval')
const fs = require('fs')
const prettyMs = require('pretty-ms')

const relativeFilepath = process.argv[2]
const runCount = process.argv[3] || 1000
const filepath = path.resolve(process.cwd(), relativeFilepath)
const content = fs.readFileSync(filepath, {encode: 'utf-8'})
const builder = safeEval(content, {module: {}})

const st = new Date()
for (let i = 0; i < runCount; i++) {
  builder({_, moment, weighted})
}
const et = new Date()

console.log({
  runCount,
  time: prettyMs(et - st)
})