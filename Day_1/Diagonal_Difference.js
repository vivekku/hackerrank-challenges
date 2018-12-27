function diagonalDifference(arr) {
    var diag1 =0, diag2 = 0;
    for (var i = 0; i < arr.length; i++)
        for (var j = 0; j < arr.length; j++){
            if (i == j)
                diag1 += arr[i][j];
            if ((i + j) == (arr.length-1))
                diag2 += arr[i][j];
        }
    return Math.abs(diag1-diag2);
}