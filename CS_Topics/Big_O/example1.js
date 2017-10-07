function foo(arr) {
  var sum = 0;
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  for (var j = 0; j < arr.length; j++) {
    product *= arr[j];
  }
}

// O(n) => drop constants
