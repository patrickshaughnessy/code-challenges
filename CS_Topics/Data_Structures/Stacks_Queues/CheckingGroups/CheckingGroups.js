function groupCheck(s){
  var open = [];
  for (let i = 0; i < s.length; i++){
    switch (s[i]) {
      case '(':
      case '[':
      case '{':
        open.push(s[i]);
        break;
      case ')':
      case ']':
      case '}':
        let check = open.pop();
        switch (check){
          case '(':
            check = ')';
            break;
          case '[':
            check = ']';
            break;
          case '{':
            check = '}';
            break
        }
        if (check !== s[i]){
          return false
        }
      break;
    }
  }
  return open.length ? false : true;
}
