const path = require('path')
const fs = require('fs')
const async = require('async')
require('colors')

const basepath = process.cwd()
const filepath = process.argv[2]

// create a queue object with concurrency
let log = []
var q = async.queue(function (task, callback) {
  let node = path.join(task.basepath, task.filepath)
  console.log('Processing node: ', node)

  fs.stat(node, (err, stat) => {
    if (err) callback(err)
    let message = stat.isFile() ? 'FILE! Adding to the log'.blue : 'DIRECTORY! Adding to the queue'.red
    console.log('It is a: ' + message)

    if (stat.isDirectory()) {
      fs.readdir(node, (err, items) => {
        if (err) callback(err)
        q.push(items.map(item => {
          return { basepath: node, filepath: item }
        }), function (err) {
          if (err) callback(err)
          console.log('Finished processing an item in: ', node + '\n')
        })
        callback()
      })
    } else {
      log.push(node)
      callback()
    }
  })
}, 1)

// assign a callback for empty queue
q.drain = function (err) {
  if (err) {
    console.log('There was an error processing:', err)
    return
  }
  console.log('All nodes have been processed. Files: \n', log)
  return
}

// Start the search by pushing the first directory into the queue
q.push({ basepath: basepath, filepath: filepath }, function (err) {
  if (err) {
    console.log('There was an error starting up:', err)
    return
  }
  console.log('Finished processing of start node: ', filepath + '\n')
})
