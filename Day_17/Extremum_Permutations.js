function extremumPermutations(n, a, b) {
	var k = a.length, l = b.length;
    var greater = new Array(n).fill(false), less = new Array(n).fill(false);
	var i, j;
    for (i = 0; i < k; i++) {
        less[a[i] - 1] = true;
		greater[a[i]] = true;
	}
    for (i = 0; i < l; i++) {
		greater[b[i] - 1] = true;
		less[b[i]] = true;
    }
	var dp = Array.from(Array(n), () => new Array(n).fill(0));
	dp[0][0] = 1;
	for (i = 1; i < n; i++) {
		var suml = 0, sumr = 0;
		if (!less[i])
			for (j = 1; j <= i; j++) {
				suml += dp[i - 1][j - 1];
				dp[i][j] += suml % 1000000007;
			}
		if (!greater[i])
			for (j = i - 1; j >= 0; j--) {
				sumr += dp[i - 1][j];
				dp[i][j] += sumr % 1000000007;
			}
    }
	var result = dp[n - 1].reduce((a, b) => a + b);
	return (result % 1000000007);
}