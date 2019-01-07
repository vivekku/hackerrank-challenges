function getMinimumCost(k, c) {
	c.sort((a,b) => b-a);
    var result = c.reduce((total,v,i) => total + (Math.floor(i/k) + 1) * v, 0);
	return result;
}