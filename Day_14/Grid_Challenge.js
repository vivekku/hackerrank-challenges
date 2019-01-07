function gridChallenge(grid) {
    var isOrder = true;
    for (var i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split("");
        grid[i].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
        grid[i] = grid[i].join("");
        if (i > 0) {
            for (var j = 0; j < grid[i].length; j++){
                if (grid[i][j].charCodeAt(0) < grid[i - 1][j].charCodeAt(0)) {
                    isOrder = false;
                    break;
                }
            }
        }
        if (isOrder == false) {
            break;
        }
    }
    if (isOrder == true) {
        return "YES";
    } else {
        return "NO";
    }
}