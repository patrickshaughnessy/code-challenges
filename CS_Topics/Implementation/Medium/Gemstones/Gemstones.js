/*
 * Complete the function below.
 */
function gemstones(rocks) {
    var result = 0;

    // find the smallest rock and filter the rest
    var smallest = rocks[0];
    var otherRocks = [];
    for (var i = 1; i < rocks.length; i++){
      if (rocks[i].length < smallest.length) {
        otherRocks.push(smallest);
        smallest = rocks[i];
      } else {
        otherRocks.push(rocks[i]);
      }
    }

    var stones = {};
    for (var i = 0; i < smallest.length; i++){
      var stone = smallest[i];

      if (!stones[stone] && checkRocks(stone)){
        result += 1;
      }

      stones[stone] = 1;
    }

    function checkRocks(stone){
      return otherRocks.every(function(rock){
        return rock.includes(stone);
      });
    }

    return result;

}
