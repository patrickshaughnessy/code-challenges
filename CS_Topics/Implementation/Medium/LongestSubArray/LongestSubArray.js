function maxLength(a, k){
  var sum = function(arr){
    return arr.reduce(function(sum, n){
      return sum += n
    }, 0)
  }

  var subLength = a.length;

  while (subLength > 1) {
    for (var i = 0, j = subLength; j <= a.length; i++, j++){
      var subSum = sum(a.slice(i, j));
      if (subSum <= k) {
        return subLength;
      }
    }
    subLength--
  }

  for (var i = 0; i < a.length; i++){
    if (a[i] <= k){
      return 1
    }
  }
  return 0
}

console.log(maxLength([3,1,2,1], 4))
console.log(maxLength([1,2,3], 4))
console.log(maxLength([5,5,5], 4))
