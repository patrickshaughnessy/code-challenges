longestPalindrome=function(s){
  var checkPalindrome = function(s){
    for (var i = 0, j = s.length-1; i <= j; i++, j--){
      if (s[i] !== s[j]){
        return false;
      }
    }
    return true;
  }

  var longest = 0;
  for (var i = 0; i<s.length; i++){
    var start = s[i];
    for (var j = i; j<s.length; j++){
      if (s[j] === start){
        var end = s[j];
        var sub = s.substring(i,j+1);
        console.log(sub);
        if(checkPalindrome(sub) && sub.length > longest){
          longest = sub.length
        }
      }
    }
  }
  console.log(longest)
  return longest;
}

longestPalindrome('aaabbb')
