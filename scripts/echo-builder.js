const path = require('path')
const fs = require('fs')

const relativeFilepath = process.argv[2]
const filepath = path.resolve(process.cwd(), relativeFilepath)
const content = fs.readFileSync(filepath, {encoding: 'utf-8'})
console.log(JSON.stringify(content))