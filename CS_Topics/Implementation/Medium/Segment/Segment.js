/*
 * Complete the function below.
 */
function segment(x, arr) {
    if (x === 1) {
      return Math.max.apply(null, arr);
    }
  
    var currentMax = 0;

    for (var i = 0, j = x; j < arr.length; i++, j++) {
        var min = Math.min.apply(null, arr.slice(i, j));
        currentMax = currentMax > min ? currentMax : min
    }

    return currentMax

}
