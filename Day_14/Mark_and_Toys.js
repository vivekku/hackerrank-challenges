function maximumToys(prices, k) {
    prices.sort((a, b) => a - b);
    var count = 0, sum;
    if (prices[0] <= k) {
        sum = prices[0];
        count++;
    } else {
        return count;
    }
    for (var i = 1; i < prices.length; i++){
        if ((sum + prices[i]) <= k) {
            sum += prices[i];
            count++;
        } else {
            return count;
        }
    }
}