const path = require('path')
const fs = require('fs')
const async = require('async')
require('colors')

const basepath = process.cwd()
const filepath = process.argv[2]

function printFiles (basepath, filepath, cb) {
  let count = 0
  let results = [];

  function checkDone(){
    if (count === 0) cb(results)
  }

  function recurse(base, file) {
    count++
    let node = path.join(base, file)
    // let stat = fs.statSync(node)
    fs.stat(node, (err, stat) => {
      if (!stat.isFile()) {
        // let items = fs.readdirSync(node)
        // items.map(item => recurse(node, item))
        fs.readdir(node, (err, items) => {
          items.forEach(item => recurse(node, item))
          count--
          checkDone()
        })
      } else {
        results.push(node)
        count--
        checkDone()
      }
    })
  }
  recurse(basepath, filepath)

}

printFiles(basepath, filepath, function(result){
  console.log(result)
})
