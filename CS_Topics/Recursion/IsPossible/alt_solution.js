/*
 * Complete the function below.
 */
function isPossible(a, b, c, d) {

  if (a === c && b === d) return 'Yes';
  if (a > c || b > d) return 'No';

  var result1 = isPossible(a + b, b, c, d);
  var result2 = isPossible(a, b + a, c, d);

  if (result1 === 'Yes' || result2 === 'Yes') {
    return 'Yes'
  } else {
    return 'No'
  }

}

console.log(isPossible(1,4,5,9)); // yes
console.log(isPossible(1,2,3,6)); // no
