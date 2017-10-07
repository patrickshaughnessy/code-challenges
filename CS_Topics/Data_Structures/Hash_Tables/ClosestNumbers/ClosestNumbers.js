/*
 * Complete the function below.
 */
function closestNumbers(arr) {

    arr = arr.sort(function(a,b){return a-b});

    var memo = {
        pairs: [arr[0], arr[1]],
        minDif: Math.abs(arr[0] - arr[1])
    }
    for (var i = 2; i < arr.length; i++){
        var dif = Math.abs(arr[i-1]-arr[i]);
        if (dif < memo.minDif){
            memo.minDif = dif;
            memo.pairs = [arr[i-1], arr[i]]
        } else if (dif === memo.minDif){
            memo.pairs.push(arr[i-1], arr[i])
        }
    }

    return memo.pairs.join(' ');

}
