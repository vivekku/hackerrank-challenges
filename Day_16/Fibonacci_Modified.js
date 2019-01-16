function fibonacciModified(t1, t2, n) {
	const BigNumber = require('bignumber.js');	
    BigNumber.config({ EXPONENTIAL_AT: 1e+9 });
    BigNumber.config({ POW_PRECISION: 0 });
	let cache = [new BigNumber(t1), new BigNumber(t2)];
    for (let i = 2; i < n; i++) {
        cache.push(cache[i - 2].plus(cache[i - 1].times(cache[i - 1])));
    }
    return cache[n - 1];
}