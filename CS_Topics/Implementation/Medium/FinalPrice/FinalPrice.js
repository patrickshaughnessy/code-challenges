/*
 * Complete the function below.
 */

// Warn students have to console.log 2 lines for this
// format for second line is space separated string of ints
function finalPrice(prices) {
    var total = prices.reduce(function(acc, price, i, arr){
        var discount = 0;
        for (var j = i+1; j < arr.length; j++){
            if (arr[j] <= price) {
                discount = arr[j];
                break;
            }
        }
        acc.final += price - discount;
        if (discount === 0){
            acc.indices.push(i);
        }
        return acc;
    }, {final: 0, indices: []});

    console.log(total.final);
    console.log(total.indices.join(' '));
}
