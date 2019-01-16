function cost(B) {
	let low = 0, high = 0, max = 0;
    for (let i = 1; i < B.length; i++) {
        let prev_low = low, prev_high = high;
        low = Math.max(prev_low, high + Math.abs(B[i - 1] - 1));
        high = Math.max(prev_high + Math.abs(B[i] - B[i - 1]), prev_low + Math.abs(B[i] - 1));
        max = Math.max(low, high);
    }
    return max;
}
