function surfaceArea(A) {
    var area = 0;
    for (var i = 0; i < A.length; i++){
        for (var j = 0; j < A[i].length; j++){
            area += A[i][j] * 4 + 2;
            if (j >= 1) {
                area -= Math.min(A[i][j - 1], A[i][j]) * 2;
            }
            if (i >= 1) {
                area -= Math.min(A[i - 1][j], A[i][j]) * 2;
            }
        }
    }
    return area;
}