function candies(n, arr) {
    var candies = new Array(n).fill(1);
    for (var i = 1; i < n; i++){
        if (arr[i] > arr[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    for (var i = n - 1; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) {
            candies[i] = Math.max(candies[i + 1] + 1, candies[i]);
        }
    }
    return candies.reduce((a, b) => a + b);
}