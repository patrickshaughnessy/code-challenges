/*
 * Complete the function below.
 */
function max_tickets(arr) {
    if (arr.length === 0 || arr.length === 1) return arr.length;
    arr = arr.sort(function(a,b){return a-b})

    var maxSequenceLength = 1;
    var currentSequenceLength = 1;

    for (var i = 1; i < arr.length; i++){
        var dif = arr[i] - arr[i-1];
        if (dif === 0 || dif === 1) {
            currentSequenceLength++;
            if (currentSequenceLength > maxSequenceLength){
                maxSequenceLength = currentSequenceLength;
            }
        } else {
            currentSequenceLength = 1;
        }
    }
    return maxSequenceLength;

}
