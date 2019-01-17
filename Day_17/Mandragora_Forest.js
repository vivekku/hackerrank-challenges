const BigNumber = require('bignumber.js');
function mandragora(H) {
	H.sort((a, b) => a - b);
	let sum = H.reduce((sum, value) => sum + value);
	let lastResult = new BigNumber(sum);
	let nextResult = new BigNumber(sum);
	let i = 0;
	while(nextResult.isGreaterThanOrEqualTo(lastResult) && i < H.length) {
		lastResult = new BigNumber(nextResult);
		sum = sum - H[i];
		nextResult = new BigNumber(i).plus(2).times(sum);
		i++;
	}
	return lastResult.toString();
}