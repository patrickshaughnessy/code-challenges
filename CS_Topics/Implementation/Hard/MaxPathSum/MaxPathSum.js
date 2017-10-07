/*
 * Complete the function below.
 */
function maxPathSum(board, p, q) {

  var paths = {
    p: [],
    q: []
  }

  var sumPath = function(x, y, sum, end, id) {
    // we've arrived at the last row
    if (x === end) {
      paths[id].push(sum);
      return
    }

    // move down on the p route, up on the q route & call again
    x = id === 'p' ? x + 1 : x - 1;
    sumPath(x, y, sum + board[x][y], end, id);

    // can move left?
    if (board[x][y-1]){
      sumPath(x, y-1, sum + board[x][y-1], end, id)
    }
    if (board[x][y+1]){
      sumPath(x, y+1, sum + board[x][y+1], end, id)
    }

  }

  sumPath(0, p, board[0][p], board.length-1, 'p')
  sumPath(board.length-1, q, board[board.length-1][q], 0, 'q')

  return Math.max(Math.max.apply(null, paths.p), Math.max.apply(null, paths.q));
}


console.log(maxPathSum([[9,4,7],[2,1,3],[1,4,2]], 2, 1))
console.log(maxPathSum([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], 2, 2))
