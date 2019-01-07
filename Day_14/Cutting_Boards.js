var mod = Math.pow(10, 9) + 7;
function boardCutting(cost_y, cost_x) {
	cost_y.sort((a, b) => b - a);
	cost_x.sort((a, b) => b - a);
	var totalCost = 0, yCuts = 0, xCuts = 0;
	while (cost_y.length && cost_x.length) {
		if (cost_y[0] >= cost_x[0]) {
			totalCost += (cost_y.shift() * (xCuts + 1)) % mod;
			yCuts++;
		} else if (cost_x[0] > cost_y[0]) {
			totalCost += (cost_x.shift() * (yCuts + 1)) % mod;
			xCuts++;
		}
	}
	while (cost_y.length) {
	totalCost += (cost_y.shift() * (xCuts + 1)) % mod;
	}
	while (cost_x.length) {
		totalCost += (cost_x.shift() * (yCuts + 1)) % mod;
	}
	return totalCost % mod;
}