// console log in a for each
function decentNumber(arr){
  return arr.map(function(n) {
    var decentNum = '';
    var possibleFives = Math.floor(n/3);
    while (possibleFives >= 0){
      var fives = possibleFives * 3;
      if ((n - fives) % 5 === 0){
        for (var i = 0; i < fives; i++){
          decentNum += '5'
        }
        for (var j = 0; j < n-fives; j++){
          decentNum += '3'
        }
        return decentNum
      }

      possibleFives--
    }
    return -1;
  })
}

console.log(decentNumber([1, 3, 5, 11, 14]));
console.log(decentNumber([3,6,9,12, 15]));
