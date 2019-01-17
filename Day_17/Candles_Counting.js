function solve(K, arr) {
  var dp = [];
  for (var i = 0; i < arr.length; ++ i) {
    dp[i] = [];
    for (var j = 0; j < (1 << K); ++ j) {
      dp[i].push(0);
    }
  }

  for (var i = 0; i < arr.length; ++ i) {
    var height = arr[i][0];
    var color = arr[i][1] - 1;
    var curState = 1 << color;
    dp[i][curState] = 1;
    for (var j = 0; j < i; ++ j) {
      if (height > arr[j][0]) {
        for (var k = 0; k < (1 << K); ++ k) {
          var newState = curState | k;
          dp[i][newState] += dp[j][k];
        }
      }
    }
  }
  var fullState = (1 << K) - 1;
  return dp.reduce(function(l, r) {
    return l + r[fullState];
  }, 0);
}

function strToInt(i) {
  return +i;
}

function processData(input) {
  input = input.split(/\n/);
  var tmp = input[0].split(/ /).map(strToInt);

  var N = tmp[0],
      K = tmp[1];

  var arr = [];

  for (var i = 1; i <= N; ++ i) {
    var line = input[i];
    arr.push(line.split(/ /).map(strToInt));
  }

  console.log(solve(K, arr));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
