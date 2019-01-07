function minimumAbsoluteDifference(arr) {
    var min = Number.MAX_VALUE;
    arr.sort((a, b) => a - b);
    for (var i = 1; i < arr.length; i++){
        min = Math.min(min, Math.abs(arr[i] - arr[i - 1]));
    }
    return min;
}