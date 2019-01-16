function substringDiff(k, s1, s2) {
	function solve(k, s1, s2) {
		var ans = 0;    
		var i;
		for ( i = 0; i < s1.length; i++) {
			var count = [];
			var j;
			for (j = 0; j < s2.length && i + j < s1.length; j ++) {
				if (s1[i + j] != s2[j]) 
					count.push(1);
				else 
					count.push(0);
			}
			var start = 0;
			var cnt = 0;
			for (j = 0; j < count.length; j ++) {
				cnt += count[j];
				for (; cnt > k; start ++) cnt -= count[start];
				ans = Math.max(ans, (j - start + 1));
			}
		}
		return ans;
	}
	return Math.max(solve(k, s1, s2), solve(k, s2, s1));
}