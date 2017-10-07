function tribonacci(signature,n){
  if (n === 0) return [];
  if (n === 1) return [1];
  var result = signature;

  for (var i = 2; i < n-1; i++){
    var num = result[i] + result[i-1] + result[i-2];
    result.push(num);
  }

  return result;
}
