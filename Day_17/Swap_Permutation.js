Array.matrix = function(numrows, numcols, initial){
    var arr = [];
    for (var i = 0; i < numrows; ++i){
        var columns = [];
        for (var j = 0; j < numcols; ++j){
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
};

function processData(input) {
    //Enter your code here
    var inputArray = input.split(" ");
    var n = Number(inputArray[0]);
    var k = Number(inputArray[1]);
    var mod = 1000000007;
    var first = countingPermutationWithKAdajacentSwap(n,k,mod);
    var second = countingPermutationWithKSwapAtMost(n,k,mod);
    console.log(first + " " + second);
    
    
} 

function countingPermutationWithKAdajacentSwap(n, k, mod){
    var dp = Array.matrix(2,k+1,0);
    dp[0][0] = 1;
    for (var i = 1; i <= n; i++) {
        var sum = 0;
        for (var j = 0; j <=k; j++) {
            sum += dp[0][j];
            sum = sum % mod;
            if (j >= i) {
                sum += mod;
                sum -= dp[0][j-i];
                sum = sum % mod;
            }
            dp[1][j] = sum;
        }
        var temp = dp[1];
        dp[1] = dp[0];
        dp[0] = temp;
    }
    var res = 0;
    for (var j = k; j >= 0; j-=2) {
        res+= dp[0][j];
        res = res % mod;
    }
    return res;
}

function countingPermutationWithKSwapAtMost(n,k,mod) {
    var dp = Array.matrix(2, k+1, 0);
    var res = 0;
    dp[0][0] = 1;
    for (var i = 1; i <= n; i++) {
        dp[1][0] = 1;
        for (var j = 1; j <= k; j++) {
            dp[1][j] = (dp[0][j] + (((i-1)*dp[0][j-1])%mod))%mod;
        }
        var temp = dp[1];
        dp[1] = dp[0];
        dp[0] = temp;
        
    }
    for (var i = 0; i <= k; i++) {
        res += dp[0][i];
        res = res % mod;
    }
    return res;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
