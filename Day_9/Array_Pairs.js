function solve(arr) {
    var max = Math.max(...arr);
    var count = 0, product;
    for (var i = 0; i < arr.length - 1; i++){
        for (var j = i + 1; j < arr.length; j++){
            product = arr[i] * arr[j];
            if (product <= max) {
                count++;
            }
        }
    }
    return count;
}