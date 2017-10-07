/*
 * Complete the function below.
 */
function isPossible(a, b, c, d) {

  var flag;

  function check(a,b,c,d) {
    if (a === c && b === d){
      flag = true;
      return;
    }

    if ((a + b) <= c) {
      check(a + b, b, c, d);
    }


    if ((b + a) <= d) {
      check(a, b + a, c, d);
    }
  }

  check(a,b,c,d);
  return flag ? 'Yes' : 'No'
}

console.log(isPossible(1,4,5,9));
console.log(isPossible(1,2,3,6));
