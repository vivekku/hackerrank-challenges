function hourglassSum(arr) {
    var hourSums = [], k = 0;
    for (var i = 1; i < arr.length - 1; i++){
        for (var j = 1; j < arr[i].length - 1; j++){
            hourSums[k++] = arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1]
                                              + arr[i][j]     +
                            arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];
        }
    }
    return Math.max(...hourSums);
}