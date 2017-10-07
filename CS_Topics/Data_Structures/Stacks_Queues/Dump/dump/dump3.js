const path = require('path')
const fs = require('fs')
const async = require('async')
require('colors')

const basepath = process.cwd()
const filepath = process.argv[2]

function printFiles (basepath, filepath) {

  let results = [];

  function recurse(base, file) {
    let node = path.join(base, file)
    let stat = fs.statSync(node)

    if (stat.isFile()) {
      results.push(node)
    } else {
      let items = fs.readdirSync(node)
      items.map(item => recurse(node, item))
    }
  }
  recurse(basepath, filepath)

  return results
}

console.log(printFiles(basepath, filepath))
