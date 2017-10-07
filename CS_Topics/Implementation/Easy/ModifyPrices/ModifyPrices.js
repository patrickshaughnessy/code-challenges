/*
 * Complete the function below.
 */
// function verifyItems(origItems, origPrices, items, prices) {
//     var result = 0;
//     items.forEach(function(item, i){
//         var origIdx = origItems.findIndex(function(orig){
//             return orig === item;
//         });
//
//         if (prices[i] !== origPrices[origIdx]){
//             result++;
//         }
//     })
//     return result
//
// }

// make it better with memo

function verifyItems(origItems, origPrices, items, prices) {
  var items = items.reduce(function(memo, item, i){
    memo[item] = prices[i];
    return memo;
  }, {});

  return origItems.reduce(function(count, origItem, i) {
    return (items[origItem] && items[origItem] !== origPrices[i]) ? count + 1 : count;
  }, 0)
}
