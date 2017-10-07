Print all paths in a 2d array from start point to finish point

- Recursion
- Be careful of if / if else
- path+= won't work when ifs fall through so you need to create a new variable or just pass it along in the recursive calls


---
# --- Student Version ---

Print all paths in a 2d array from start point to finish point.

A path consists of moves represented by the value at the indices connected by '-'. See the examples for details.

Considerations:
- Moves should always be towards the end point (i.e. no backtracking or moving away from the end point)
- Paths can overlap

function printAllPaths(matrix, start, end){

}

console.log(printAllPaths([[9,4,7],[2,1,3],[1,4,2]], [2,2], [0,0]))

[ '2-4-1-2-9',
  '2-4-1-2-9',
  '2-4-1-4-9',
  '2-3-1-2-9',
  '2-3-1-4-9',
  '2-3-7-4-9' ]

console.log(printAllPaths([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], [0,0], [3,2]))

[ '1-2-3-6-9-12',
  '1-2-5-6-9-12',
  '1-2-5-8-9-12',
  '1-2-5-8-11-12',
  '1-4-5-6-9-12',
  '1-4-5-8-9-12',
  '1-4-5-8-11-12',
  '1-4-7-8-9-12',
  '1-4-7-8-11-12',
  '1-4-7-10-11-12' ]
