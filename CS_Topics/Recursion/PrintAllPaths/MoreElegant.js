function printAllPaths(matrix, start, end) {
  var paths = [];

  var startX = start[0];
  var startY = start[1];
  var endX = end[0];
  var endY = end[1];

  function printPath(x, y, path){
    var node = matrix[x][y];

    // current node / coordinate is the end
    if (x === endX && y === endY){
      path += node;
      paths.push(path);
      return
    }

    // path = '', node = 0
    // x = 0 , y = 0

    // can move right?
    if (y < endY) {
      printPath(x, y+1, path + node + '-')
    }

    // can move left?
    if (y > endY) {
      printPath(x, y-1, path + node + '-')
    }

    // can move down?
    if (x < endX) {
      printPath(x+1, y, path + node + '-')
    }

    // can move up?
    if (x > endX) {
      printPath(x-1, y, path + node + '-')
    }

  }

  printPath(startX, startY, '');

  return paths;
}
