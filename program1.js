const getTotalIsles = function (grid) {
  // write your code here

  if (grid === null || grid.length === 0) {
    return 0;
  }

  let count = 0;

  // function to perform DFS
  function dfs(grid, i, j) {
    // Check for out of bounds or water
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === "W"
    ) {
      return;
    }

    // Mark the cell as visited by setting it to 'W'
    grid[i][j] = "W";

    // Perform DFS in all 4 directions
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "L") {
        count++;
        dfs(grid, i, j);
      }
    }
  }

  return count;
};

module.exports = getTotalIsles;
