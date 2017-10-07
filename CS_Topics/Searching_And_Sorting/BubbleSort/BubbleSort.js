function swap(arr, i, j) {
  console.log('swapping ' + arr[i] + ' and ' + arr[j])
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
  return arr;
}

function bubbleSort(arr) {
  console.log('bubble sorting arr ', arr)

  for (var i = 0; i < arr.length; i++) {
    // add flag to end the sort early if no pairs were switched
    var done = true;

    for (var j = 0, stop = arr.length - i; j < stop; j++) {
      console.log('loop #' + i, 'checking ' + arr[j] + ' and ' + arr[j+1])
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
        done = false;
      }
    }

    if (done) {
      console.log('No swap performed, exiting bubble sort after iteration ' + i)
      break;
    }

  }
  return arr
}

console.log(bubbleSort([5, 1, 42, 21, 10, 7]));
