/*
 * Complete the function below.
 */
function makeItLarge(inp) {
    return inp.map(function(s){
        s = s.split('');

        for (var i = s.length-1; i>0; i--){
            if (s[i] > s[i-1]){

                var left = s.slice(0, i-1);
                var right = s.slice(i-1);

                var first = right[0];
                var next = right[1];
                var nextIdx = 1;
                for (var j = 2; j < right.length; j++){
                    if (right[j] < next && right[j] > first){
                        next = right[j];
                        nextIdx = j;
                    }
                }

                var temp = first;
                right.splice(nextIdx, 1);
                right.splice(0, 1);
                right.push(temp);
                right = right.sort();
                right.unshift(next);

                return left.concat(right).join('');

            }
        }
        return 'no answer'
    })

}

console.log(makeItLarge(['fgwimatibkcdnxdxoupc', 'kmqtlcxbejwlputeuomx', 'thxlctqyifxkycbqjqym', 'dggcxkxhmwgaxtkpwwby']))
