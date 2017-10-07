// /*
//  * Complete the function below.
//  */
function countMoves(numbers){
  var lowest = Math.min.apply(null, numbers);

  return numbers.reduce(function(moves, number){
    return moves + number - lowest
  }, 0)
}

// function countMoves(numbers) {
//   var moves = 0;
//   var requiredMoves = numbers.length - 1;
//
//   var highest = Math.max.apply(null, numbers)
//
//   function equalNums(){
//     return numbers.every(function(number){
//       return number === highest
//     })
//   }
//
//   while (!equalNums()) {
//     var i = 1
//     var j = 0;
//     var idx;
//     while (i <= requiredMoves) {
//       // console.log(i, numbers);
//       if (numbers[j] < highest){
//         numbers[j]++;
//         j++
//         i++
//       } else if (numbers[j] == highest){
//         idx = j
//         j++
//       } else if (j >= numbers.length) {
//         highest++
//         numbers[idx]++
//         i++
//       } else {
//         j++
//       }
//     }
//     moves++;
//   }
//   console.log(numbers)
//   return moves
// }

// The trick is to realize you don't need to continually iterate through the array
// Try a different approach, write out test cases
// Find a pattern
// In this case, stumbling upon the pattern where increasing one number in the array
// resulted in 1 additional move
// Backtracking, I found that the total moves is simply adding up all of the differences
// between the lowest number and each number in the set

// console.log(countMoves([1,2,3,4]))
// console.log(countMoves([1,2,3,5]))
// console.log(countMoves([1,2,3,6]))
// console.log(countMoves([1,2,3,7]))
// console.log(countMoves([1,2,4,5,7]))
// console.log(countMoves([5,6,8,8,5]))
// console.log(countMoves([5,6,8,8,5,9]))

// Hackerrank test cases:
[1,2,3] // 3
[2,2,2] // 0
[5,6,8,8,5] // 7
[6,5,8,4,6] // 9
[32,14,27,17,50,94,96,71,60,79,68,64,25,14,76,28,97,12,34,15,98,26,36,43,19,85,19,99,37,68,45,53,26,16,59,49,11,69,20,61] // 1472
