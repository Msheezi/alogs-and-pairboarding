//num islands

//could be no islands potentially
//we're always going to have either a 1 or 0
// initiate a counter to keep track of islands
// loop through nodes
//if a 1
// increment island counter
// set visited node to 0
// DFS on that node
//
//

/*

    grid = [
        [0,0,0,0,0]
        [0,0,0,0,0]
        [0,0,0,0,0]
        [0,0,0,0,0]
    ]

    1

    counter = 1


    */
let grid = [
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
];
function numOfIslands(grid) {
  let counter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        counter += 1;
        dfs(grid, i, j);
      }
    }
  }
  return counter;
}

function dfs(grid, i, j) {
  if (i > grid.length || j > grid[i].length) return;

  if (grid[i][j] === 0) return;

  if (grid[i][j] === 1) {
    grid[i][j] = 0;
  }

  dfs(grid, i, j + 1);
  dfs(grid, i + 1, j);
}

console.log(numOfIslands(grid));
