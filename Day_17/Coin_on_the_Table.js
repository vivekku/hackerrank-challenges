function DP(r,c,grid,N,M,K,cache) {
    if (r < 0 || c < 0 || r >= N || c >= M)
        return Number.POSITIVE_INFINITY;
    if (grid[r][c] === "*" && K >= 0)
        return 0;
    else if (K <= 0)
        return Number.POSITIVE_INFINITY;
    
    var key = r + " " + c + " " + K;
    if (key in cache)
        return cache[key];
    
    var lresult = DP(r,c-1,grid,N,M,K-1,cache) + (grid[r][c] === "L" ? 0 : 1);
    var rresult = DP(r,c+1,grid,N,M,K-1,cache) + (grid[r][c] === "R" ? 0 : 1);
    var uresult = DP(r-1,c,grid,N,M,K-1,cache) + (grid[r][c] === "U" ? 0 : 1);
    var dresult = DP(r+1,c,grid,N,M,K-1,cache) + (grid[r][c] === "D" ? 0 : 1);
    var result = Math.min(lresult,rresult,uresult,dresult);
        
    cache[key] = result;
    return result;
}

function processData(input) {
    var lines = input.split("\n");
    var nmk = lines.shift().split(" ").map(Number);
    N = nmk[0];
    M = nmk[1];
    K = nmk[2];

    var grid = [];
    for (var n=0; n<N; n++) {
        grid[n] = [];
        var row = lines.shift();
        for (var m=0; m<M; m++) {
            grid[n][m] = row.charAt(m);
        }
    }
    
    var result = DP(0,0,grid,N,M,K, {});
    if (result === Number.POSITIVE_INFINITY)
        console.log(-1);
    else
        console.log(result);
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

