function processData(input) {
    input = input.split('\n');
    var T = parseInt(input.shift());
    input = input.map(function(l) {
        var nums = l.split(' '); 
        return nums.map(function(n) {return parseInt(n);});
    });
    
    var turan = function(n, r) {
        return 0.5 * ( Math.pow(n, 2) - (n%r) * Math.pow(Math.ceil(n/r), 2) - 
               (r - (n % r) ) * Math.pow(Math.floor(n/r), 2));
    };    
    input.forEach(function(test) {        
        var N = test[0],
            M = test[1];
        for (var i = 1; i < N*2; i++) {
            if ( (turan(N, i) < M) && (M <= turan(N, i+ 1))) {
                console.log(i + 1);
                break;
            }
        }
    });
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
