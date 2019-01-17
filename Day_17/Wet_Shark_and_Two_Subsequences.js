function twoSubsequences(x, r, s) {	
    var MOD = 1000000007;
	if (r < s || (r + s) % 2 != 0 || (r - s) % 2 != 0) {
		return 0;;
	} else {
		var a = (r + s) / 2;
		var b = (r - s) / 2;
		var dynA = Array.from(Array(a + 1), () => new Array(x.length + 1));
		dynA[0][0] = 1;
		var dynB = Array.from(Array(b + 1), () => new Array(x.length + 1));
		dynB[0][0] = 1;
		console.log(dynA + "\n" + dynB);
		for (var i = 0; i < x.length; i++) {
			for (var j = a; j >= x[i]; j--) {
				for (var k = 1; k <= x.length; k++) {
					dynA[j][k] = (dynA[j][k] + dynA[j - x[i]][k-1]) % MOD;
				}
			}
			for (var j = b; j >= x[i]; j--) {
				for (var k = 1; k <= x.length; k++) {
					dynB[j][k] = (dynB[j][k] + dynB[j - x[i]][k-1]) % MOD;
				}
			}
		}
		var res = 0;
		for (var k = 1; k <= x.length; k++) {
			res = (res + (dynA[a][k] * dynB[b][k]) % MOD) % MOD;
		}
		return res;
	}
}