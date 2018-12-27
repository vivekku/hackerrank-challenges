function bomberMan(n, grid) {
    var grid1 = new Array(grid.length);
    var grid2 = new Array(grid.length);
    var grid3 = new Array(grid.length);
    var i, j;
    for (i = 0; i < grid.length; i++) {
        grid1[i] = new Array(grid[i].length);
        grid2[i] = new Array(grid[i].length);
        grid3[i] = new Array(grid[i].length);
        for (j = 0; j < grid[i].length; j++){
            grid1[i][j] = 'O';
            grid2[i][j] = 'O';
            grid3[i][j] = 'O';
        }
        grid1[i] = grid1[i].join('');
    }
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            if (grid[i].charAt(j) == "O") {
                grid2[i][j] = '.';
                if (i < grid.length - 1) {
                    grid2[i + 1][j] = '.';
                }
                if (i > 0) {
                    grid2[i - 1][j] = '.';
                }
                if (j < grid[i].length - 1) {
                    grid2[i][j + 1] = '.';
                }
                if (j > 0) {
                    grid2[i][j - 1] = '.';
                }
            }
        }
    }
    for (i = 0; i < grid2.length; i++) {
        for (j = 0; j < grid2[i].length; j++) {
            if (grid2[i][j] == 'O') {
                grid3[i][j] = '.';
                if (i < grid.length - 1) {
                    grid3[i + 1][j] = '.';
                }
                if (i > 0) {
                    grid3[i - 1][j] = '.';
                }
                if (j < grid[i].length - 1) {
                    grid3[i][j + 1] = '.';
                }
                if (j > 0) {
                    grid3[i][j - 1] = '.';
                }
            }
        }
        grid2[i] = grid2[i].join('');
    }
    for (i = 0; i < grid3.length; i++) {
        grid3[i] = grid3[i].join('');
    }
    if (n == 1 || n == 0) {
        return grid;        
    } else if ((n - 1) % 4 == 0) {
        return grid3;
    } else if ((n - 1) % 2 == 0) {
        return grid2;
    } else {
        return grid1;
    }
}