/*
* Complete the function below.
*/
function sortIntersect(f, m) {
  var females = f.reduce(function(memo, female){
    memo[female] = memo[female] ? memo[female] + 1 : 1;
    return memo
  }, {});

  var males = m.reduce(function(memo, male){
    memo[male] = memo[male] ? memo[male] + 1 : 1;
    return memo
  }, {});

  var result = [];

  for (var key in females){
    while(males[key] && females[key]){
      result.push(key);
      males[key]--;
      females[key]--;
    }
  }

  return result.sort(function(a,b){
    return b - a;
  });

}

var fem = [10670, 11057, 16111, 17203, 16390, 8500, 7551, 11517, 12848, 6988, 17875, 11751, 8500]
var mal = [14376, 17203, 16797, 8350, 8500, 7155, 12365, 16111, 16111, 17875, 13115, 10048, 8500]

console.log(sortIntersect(fem, mal));
