function stockmax(prices) {
	let max = 0, profit = 0;
    for (let i = prices.length-1; i > -1; i--){
        if (prices[i] > max) {
            max = prices[i];
        }
        profit += max - prices[i];
    }
    return profit;
}