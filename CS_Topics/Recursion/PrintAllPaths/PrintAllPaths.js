var printAllPaths = function(matrix, start, end){

  var paths = [];
  var startX = start[0];
  var startY = start[1];
  var endX = end[0];
  var endY = end[1];

  var printPath = function(x, y, path){

    // we've arrived
    if (x === endX && y === endY){
      paths.push(path);
      return;
    }

    var right = Math.abs(y+1 - endY);
    var left = Math.abs(y-1 - endY);

    if (right < left){
      // move right
      if (matrix[x][y+1]){
        // careful,  path+= won't work b/c ifs fall through
        printPath(x, y+1, path + '-' + matrix[x][y+1])
      }
    } else if (right > left){
      // move left
      if (matrix[x][y-1]){
        printPath(x, y-1, path + '-' + matrix[x][y-1])
      }
    }

    var down = Math.abs(x+1 - endX);
    var up = Math.abs(x-1 - endX);

    if (down < up) {
      // move down
      if (matrix[x+1][y]){
        printPath(x+1, y, path + '-' + matrix[x+1][y])
      }
    } else if (down > up){
      // move up
      if (matrix[x-1][y]){
        printPath(x-1, y, path + '-' + matrix[x-1][y])
      }
    }

  }

  var first = matrix[startX][startY].toString();
  printPath(startX, startY, first)

  return paths;

}


console.log(printAllPaths([[9,4,7],[2,1,3],[1,4,2]], [2,2], [0,0]))
console.log(printAllPaths([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], [0,0], [3,2]))
