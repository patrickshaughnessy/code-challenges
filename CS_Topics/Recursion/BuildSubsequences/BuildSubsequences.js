function buildSubsequences(s) {

  var result = {};

  function sub(s){
    result[s] = 1;

    for (var i = 0; i < s.length; i++){
      var newString = s.substr(0, i) + s.substr(i + 1);
      if (!result[newString] && newString.length){
        sub(newString);
      }
    }

  }

  sub(s);

  return Object.keys(result).sort()

}


console.time('1');
console.log(buildSubsequences('abcdefghijklmnopqr').length);
console.log(buildSubsequences('abc'));
console.timeEnd('1');
