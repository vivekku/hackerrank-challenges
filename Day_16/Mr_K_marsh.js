function kMarsh(grid) {
	var m = grid.length, n = grid[0].length;
    let count_left = [], count_down = [];
    let i, j, i2, j2;
    let max = -1;
    for (i = 0; i < m; i++) {
        count_left[i] = [];
        count_down[i] = [];
        for (j = 0; j < n; j++) {
            count_left[i][j] = -1;
            count_down[i][j] = -1;
        }
    }
    if (grid[0][0] == '.') {
        count_left[0][0] = 0;
        count_down[0][0] = 0;
    }
    for (i = 1; i < m; i++) {
        if (grid[i][0] == '.') {
            count_down[i][0] = 0;
            count_left[i][0] = 0;
            if (grid[i-1][0] == '.') {
                count_down[i][0] = count_down[i-1][0] + 1;
            }
        }
    }
    for (j = 1; j < n; j++) {
        if (grid[0][j] == '.') {            
            count_left[0][j] = 0;
            count_down[0][j] = 0;
            if (grid[0][j-1] == '.') {
                count_left[0][j] = count_left[0][j-1] + 1;
            }
        }
    }
    for (i = 1; i < m; i++) {        
        for (j = 1; j < n; j++) {
            if (grid[i][j] == '.') {
                count_left[i][j] = 0;
                count_down[i][j] = 0;
                if (grid[i][j-1] == '.') {
                    count_left[i][j] = count_left[i][j-1] + 1;
                }
                if (grid[i-1][j] == '.') {
                    count_down[i][j] = count_down[i-1][j] + 1;
                }
            }
        }
    }
    for (i = m-1; i > 0; i--) {
        for (j = n-1; j > 0; j--) {
            if ((grid[i][j] == '.') 
                && (count_left[i][j] > 0) 
                && (count_down[i][j] > 0) 
                && (count_left[i][j] + count_down[i][j] > max)) {
                for (i2 = i-1; i2 >= 0; i2--) {
                    if (grid[i2][j] != '.') break;
                    for (j2 = j-1; j2 >= 0; j2--) {
                        if (grid[i2][j2] != '.') break;
                        if ((count_left[i][j] >= j - j2)                             
                            && (count_down[i][j2] >= i - i2)                             
                            && (max < i - i2 + j - j2)
                           ) {
                            max = i - i2 + j - j2;
                        }
                    }
                }
            }
        }
    }
    if (max == -1) {
        console.log('impossible')
    } else {
        console.log(max * 2)
    }
}