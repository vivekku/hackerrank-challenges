function minimumLoss(price) {
    let yearsForPrices = [];
    for (let i = 0; i < price.length; i++) {
        yearsForPrices[price[i]] = i;
    }
    price.sort((a, b)=>{return a-b});
    let minPosDiff = Number.MAX_VALUE;
    for (let i = 0; i < price.length - 1; i++) {
        if (yearsForPrices[price[i + 1]] < yearsForPrices[price[i]]) {
            let diff = price[i + 1] - price[i];
            if (diff > 0) {
                minPosDiff = Math.min(minPosDiff, diff);
            }
        }
    }
    return minPosDiff;
}