function summingPieces(arr) {
	const MOD = Math.pow(10, 9) + 7;
	let power2 = (n, arr) => {
		let ans=1;
		arr[0] = 1;
		for(let i = 0;i < n; i++) {
			ans = (ans*2)%MOD;
			arr[i+1] = ans;
		}
		return ans;
	}	
	let len = arr.length;
    let pots = [];
    let prev = power2(len, pots) - 1;
    let sum = (arr[0]%MOD) * prev;
    sum = sum%MOD + ((arr[len - 1]%MOD) * prev)%MOD;
    let start = len - 2;
    for(let i = 0; i < Math.ceil(len/2) - 1; i++) {
		let elem1 = arr[i+1]%MOD;
		let elem2 = arr[len - i - 2]%MOD;
		let factor1 = pots[start - i];
		let factor2 = pots[i];
		let factor = (prev + MOD + factor1 - factor2)%MOD;
		sum = sum%MOD + (elem1 * factor)%MOD;
		if(i + 1 !== len - i - 2) {
			sum = sum%MOD + (elem2 * factor)%MOD;
		}
		prev = factor;
    }
    return(sum%MOD);
}
