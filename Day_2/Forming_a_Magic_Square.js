function formingMagicSquare(s) {
    var min_cost = 45;
    var square = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]]
    ];
    for (var k = 0; k < 8; k++){
        var cost = 0;
        for (var i = 0; i < s.length; i++){
            for (var j = 0; j < s.length; j++){
                cost += Math.abs(s[i][j] - square[k][i][j]);
            }
        }
        if (cost < min_cost) {
            min_cost = cost;
        }
    }
    return min_cost;
}