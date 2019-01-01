function zArrayHelper(s) {
	s = s.toLowerCase();
	let Z = [s.length];
	let n = s.length;
	let [ L, R ] = [0, 0];
	let k;
	for (let i = 1; i < n; i++) {
		if (i > R) {
			[ L, R ] = [i, i];
			while (R < n && s[R-L] == s[R]) {
				R++;
			}
			Z[i] = R-L;
			R--;
		}
		else {
			k = i-L;
			if(Z[k] < R + 1 - i) {
				Z[i] = Z[k];
			}
			else {
				L = i;
				while (R < n && s[R-L] == s[R]) {
					R++;
				}
				Z[i] = R-L;
				R--;
			}
		}
	}
	return Z;
}

// Returns the sum of length of all the matching longest common prefix
function stringSimilarity(string) {
	return zArrayHelper(string).reduce((sum, length) => sum + length, 0);
}