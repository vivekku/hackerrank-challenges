function twoArrays(k, A, B) {
	A.sort((a, b) => a - b);
	B.sort((a, b) => a - b);	
	let n = A.length;
	let arr = new Array(n).fill(false);
	for(let j=0; j<n; j++) {
		let step = 0;
		let found = false;
		while(step < n && !found) {
			if(!arr[step] && A[j] + B[step] >= k) {
				arr[step] = true;
				found = true;
			}
			step++;
		}
	}
	if(arr.reduce((r, a) => r && a, true)) {
		return "YES";
	} else {
		return "NO";
	}
}