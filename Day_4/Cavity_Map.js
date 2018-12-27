function cavityMap(grid) {
    var i, j, top, down, left, right, cavity;
    for (i = 1; i < grid.length - 1; i++){
        for (j = 1; j < grid[i].length - 1; j++){
            top = parseInt(grid[i - 1][j]);
            down = parseInt(grid[i + 1][j]);
            left = parseInt(grid[i][j - 1]);
            right = parseInt(grid[i][j + 1]);
            cavity = parseInt(grid[i][j]);
            if (cavity > top && cavity > down && cavity > left && cavity > right) {
                grid[i] = grid[i].substr(0, j) + "X" + grid[i].substr(j + 1);
            }
        }
    }
    return grid;
}