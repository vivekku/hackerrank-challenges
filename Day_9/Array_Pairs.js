function solve(arr) {
    var count = 0, pairs = [];
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var max = Math.max(...arr.slice(i, j + 1));
            if (arr[i] * arr[j] <= max) {
                count++;
            }
        }
    }
    return count;
}