process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    processData(input);
});

function processData(input){
    let inp = input.split('\n'),
        T = parseInt(inp[0]),
        n,
        arr,
        memoPrimes = {},
        memoNotPrimes = {};
    function isPrime(number) {
        if(memoPrimes[number]) {
            return true;
        }
        if(memoNotPrimes[number]){
            return false;
        }
        if(number <= 1 ) {
            memoNotPrimes[number] = 1;
            return false;
        }
        for(let i = 2; i*i <= number; i += 1){
            if(number % i === 0) {
                memoNotPrimes[number] = 1;
                return false;
            }
        }
        memoPrimes[number] = 1;
        return true;
    }
    function getCount(array, arrLength){
        let totalCount = 0,
            countNumbers = {},
            dp = {};

        for(let i = 3500; i <= 4500; i += 1){
            dp[i] = [];
            countNumbers[i] = 0;
            for(let j = 0; j < 8192; j += 1){
                dp[i][j] = 0;
            }
        }

        // counting count of each number
        for(let i = 0; i < arrLength; i += 1){
            countNumbers[array[i]] += 1;
        }
        dp[3500][0] = parseInt((countNumbers[3500] + 2)/2);
        dp[3500][3500] = parseInt((countNumbers[3500] + 1)/2);
        
        let cntEven,
            cntOdd;
        for(let i = 3501; i < 4096; i += 1){
            cntEven = parseInt((countNumbers[i] + 2)/2);
            cntOdd = parseInt((countNumbers[i] + 1)/2);
            if(cntOdd === 0){
                dp[i] = dp[i-1];
            } else {
                for(let j = 0; j < 4096; j += 1){
                    dp[i][j] = (dp[i-1][j]*cntEven + dp[i-1][j^i]*cntOdd) % (1e9+7);
                }
            }
        }
        for(let i = 4096; i <= 4500; i += 1){
            cntEven = parseInt((countNumbers[i] + 2)/2);
            cntOdd = parseInt((countNumbers[i] + 1)/2);
            if(cntOdd === 0){
                dp[i] = dp[i-1];
            } else {
                for(let j = 0; j < 8192; j += 1){
                    dp[i][j] = (dp[i-1][j]*cntEven + dp[i-1][j^i]*cntOdd) % (1e9+7);
                }
            }
        }
        totalCount = dp[4500][2] % (1e9 + 7);
        for(let i = 3; i < 8192; i += 2){
            if(isPrime(i)){
                totalCount = (totalCount + dp[4500][i]) % (1e9 + 7);
            }
        }
        return totalCount;
    }
    for(let i = 0; i < T; i += 1){
        n = parseInt(inp[2*i+1]);
        arr = inp[2*i+2].split(' ').map(Number);
        console.log(getCount(arr, n));
    }
}
