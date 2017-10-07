function foo(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ',' + arr[j]);
    }
  }
}

/*
First time j runs for n-1 steps, second time n-2...

(n-1) + (n-2) + (n-3)... 2 + 1 = 1 + 2 + 3 + ... (n-1)
Sum of integers 1 thru N => N(N-1)/2

O(n^2)
