function indianJob(maxTime, times) {
    const n = times.length;
    
    let sum = 0;
    for (let i = 0; i < n; sum += times[i++]){}
    
    const dp = new Array(n+1);
    for (let i = 0; i <= n; dp[i++] = new Array(sum+1)){}
    
    for (let i = 0; i <= n; dp[i++][0] = true){}
    for (let i = 1; i <= sum; dp[0][i++] = false){}
    
    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= sum; ++j) {
            dp[i][j] = dp[i-1][j];
            if (times[i-1] <= j) {
                dp[i][j] = dp[i][j] || dp[i-1][j-times[i-1]];
            }
        }
    }
    
    let time = sum;
    for (let j = sum >>> 1; j >= 0; --j) {
        if (dp[n][j] == true) {
            time = Math.max(j, sum - j);
            break;
        }
    }
    
    return maxTime >= time ? 'YES' : 'NO';
}