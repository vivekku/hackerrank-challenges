function countArray(n, k, x) {
    var mod = 1000000007;
    var dp = new Array(n + 1).fill(0);
	dp[3] = (x == 1) ? k - 1 : k - 2;
	dp[2] = (x == 1) ? 0 : 1;
	for (var i = 4; i <= n; ++i) {
		dp[i] += dp[i-2] * (k - 1) + dp[i-1] * (k - 2);
		dp[i] %= mod;
	}
    return dp[n];
}