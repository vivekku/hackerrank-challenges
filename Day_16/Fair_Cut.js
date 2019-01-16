function fairCut(k, arr) {
    arr.sort((a, b) => a - b);
	var dp = new Array(k + 1).fill(0);
	dp[0] = dp[1] = 0;
	for (var i = 1; i < arr.length; i++) {
		var dist = arr[i] - arr[i - 1];
		var nxt = new Array(k + 1).fill(Infinity);
		for (var j = 0; j <= k; j++) {
			var lftTake = j, lftSkip = i - j, rghTake = k - j;
			var rghSkip = arr.length - i - rghTake;			
			if (lftTake < 0 || lftSkip < 0 || rghTake < 0 || rghSkip < 0) {
				continue;
			}			
			var bonus = dist * (lftTake * rghSkip + lftSkip * rghTake);
			if (dp[j] != Infinity) {
				nxt[j] = Math.min(nxt[j], dp[j] + bonus);
				if (j != k) {
					nxt[j + 1] = Math.min(nxt[j + 1], dp[j] + bonus);
				}
			}

		}
		dp = nxt;
	}
	return dp[k];
}