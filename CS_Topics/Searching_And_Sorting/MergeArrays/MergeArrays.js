/*
 * Complete the function below.
 */
function mergeArrays(a, b) {
    var result = [];

    while (a.length && b.length){
        if (a[0] < b[0]){
            result.push(a.shift());

        } else {
            result.push(b.shift());
        }
    };

    return result.concat(a.length ? a : b);
}

console.log(mergeArrays([2,4,5,9,9], [0,1,2,3,4]))
