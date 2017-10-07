const path = require('path')
const fs = require('fs')
const async = require('async')
require('colors')

const basepath = process.cwd()
const filepath = process.argv[2]

function printFiles (base, file, cb) {
  let node = path.join(base, file)
  async.waterfall([
    function(cb){
      fs.stat(node, (err, stat) => {
        if (!stat.isFile()) {
          cb('not a file')
        } else {
          cb(null, node)
        }
      })
    },
  ], function(err, result){
    if (err) {
      fs.readdir(node, (err, items) => {
        items.forEach(item => printFiles(node, item, cb))
      })
    } else {
      cb(result)
    }
  })
}

printFiles(basepath, filepath, function(result) {
  console.log(result)
})
