function bricksGame(arr) {
    const length = arr.length;
    const bricks = [...arr].reverse();
    const dp0 = new Array(length + 1).fill(0);
    const dp1 = [...dp0];
    const cumSum = [0];
    let value = 0;    
    for (let i = 0; i < length; i++) {
        value += bricks[i];
        cumSum.push(value);
    }    
    for (let n = 1; n < length + 1; n++) {
        if (n <= 3) {
            dp0[n] = cumSum[n];
            dp1[n] = 0;
            continue;
        }
        let firstCase = 0;
        let secondCase = 0;
        let thirdCase = 0;
        if (n - 1 > 0) {
            firstCase = bricks[n - 1] + dp1[n - 1]; 
        }        
        if (n - 2 > 0) {
            secondCase = bricks.slice(n - 2, n).reduce((cum, cur) => cum + cur,0) + dp1[n - 2]; 
        }
		if (n - 3 > 0) { 
			thirdCase = bricks.slice(n - 3, n).reduce((cum, cur) => cum + cur,0) + dp1[n - 3];
		}
        dp0[n] = Math.max(firstCase, secondCase, thirdCase);
        dp1[n] = cumSum[n] - dp0[n];
    }
    return dp0[length];
}
