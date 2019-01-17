function redJohn(n) {
	
	function Fact(num) {
		var rval = 1;
		for (var i = 2; i <= num; i++)
			rval = rval * i;
		return rval;
	}
	
	var variants = 0;
    for (let i = 0; i <= Math.floor(n / 4); i++) {
        let a = i;
        let b = n - i * 4;
        variants += Fact(a + b) / (Fact(a) * Fact(b))
    }
    variants++;
	var upperLimit = Math.sqrt(variants), output = [], A = new Array(variants).fill(true);
	for (let i = 2; i < upperLimit; i++) {
		if (A[i]) {
			for (let j = i * i; j < variants; j = j + i) {
				A[j] = false
			}
		}
	}
	return A.filter(x => x == true).length - 2;
}