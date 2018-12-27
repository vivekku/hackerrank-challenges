function twoPluses(grid) {

    function areaProduct(grid, n, m, i1, j1, i2, j2) {
		var len1 = -1; 
		var len2 = -1;
        var expandedFirst = true; 
		var expandedSecond = true;
        while (expandedFirst || expandedSecond) {
			if (expandedFirst) { expandedFirst = expandPlus(grid, n, m, i1, j1, len1 + 1); }
            if (expandedFirst) { len1++; } 
			if (expandedSecond) { expandedSecond = expandPlus(grid, n, m, i2, j2, len2 + 1); }
            if (expandedSecond) { len2++; }
        } 
		removePlus(grid, n, m, i1, j1, len1);
        removePlus(grid, n, m, i2, j2, len2); 
		return (4 * len1 + 1) * (4 * len2 + 1);}
        
    function expandPlus(grid, n, m, i, j, len) {
        if (i - len >= 0 && i + len < n && j - len >= 0 && j + len < m && grid[i - len][j] === 'G' && grid[i + len][j] === 'G' && grid[i][j - len] === 'G' && grid[i][j + len] === 'G')
        { 
			grid[i - len][j] = 'P'; 
			grid[i + len][j] = 'P'; 
			grid[i][j - len] = 'P'; 
			grid[i][j + len] = 'P'; 
			return true; 
		} 
		return false;
    }
        
    function removePlus(grid, n, m, i, j, len) {
        var k; grid[i][j] = 'G';
        for (k = 1; k <= len; k++) {
            grid[i - k][j] = 'G';
            grid[i + k][j] = 'G';
            grid[i][j - k] = 'G';
            grid[i][j + k] = 'G';
        }
    }
        
    var areas = [], cpyGrid = [];
    var p = grid.length;
    var q = grid[0].length;
    for (var i = 0; i < p; i++) {
        cpyGrid[i] = [];
        for (var j = 0; j < q; j++) {
            cpyGrid[i][j] = grid[i][j]
        }
    }
    var i1, j1, i2, j2, i;
    var maxProduct = 0;
    for (i1 = 0; i1 < p; i1++) {
        for (j1 = 0; j1 < q; j1++) {
            if (grid[i1][j1] === 'G') {
                i2 = i1;
                j2 = j1 + 1;
                while (i2 < p) {
                    if (j2 === q) {
                        i2++;
                        j2 = 0;
                    } else {
                        if (grid[i2][j2] === 'G') {
                            maxProduct = Math.max(maxProduct,
                                areaProduct(cpyGrid, p, q, i1, j1, i2, j2));
                        }
                        j2++;
                    }
                }
            }
        }
    }
    return maxProduct;
}