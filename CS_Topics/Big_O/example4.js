function foo(arrA, arrB) {
  for (var i = 0; i < arrA.length; i++) {
    for (var j = 0; j < arrB.length; j++) {
      console.log(arrA[i] + ',' + arrB[j]);
    }
  }
}

/*
NOT O(n^2)
2 arrays of different lengths (A) and (B) so O(AB)
