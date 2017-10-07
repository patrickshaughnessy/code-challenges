var uniqueInOrder=function(iterable){
  var result = [];

  var current;
  for (var i = 0; i < iterable.length; i++){
    if (!current || iterable[i] !== current){
       current = iterable[i];
       result.push(current);
    }
  }

  return result;
}
