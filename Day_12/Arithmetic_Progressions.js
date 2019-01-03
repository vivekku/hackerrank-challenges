'use strict';

var MOD = 1000003;


function AP(a, d, p) {
    this.a = a;
    this.d = d;
    this.p = p;
    this.dp = pow(d, p);
}


function pow(d, p) {
    if (p == 0) { return 1; }
    else if (p == 1) { return d; }

    var res = 1;
    var bit = Math.pow(2, Math.floor(Math.log(p) / Math.log(2)));
    while (bit > 0) {
        res *= res;
        res %= MOD;
        if (p & bit) {
            res *= d;
            res %= MOD;
        }
        bit = Math.floor(bit / 2);
    }
    return res;
}


var Fs = [1, 1, 2, 6];
function fact(n) {
    if (n < Fs.length) {
        return Fs[n];
    } else if (n >= MOD) {
        return 0;
    }

    var res = Fs[Fs.length - 1];
    for (var i = Fs.length; i <= n; i++) {
        res *= i;
        res %= MOD;
        Fs.push(res);
    }
    return res;
}


function processData(input) {
    var parse_fun = function (s) { return parseInt(s, 10); };

    var lines = input.split('\n');
    var N = parse_fun(lines.shift());
    var APs = (
         lines
        .splice(0, N)
        .map(function (s, idx, arr) {
            var params = s.split(' ').map(parse_fun);
            return new AP(params[0], params[1], params[2]);
        })
    );

    var Q = parse_fun(lines.shift());
    var ops = (
         lines
        .splice(0, Q)
        .map(function (s) {
            var params = s.split(' ').map(parse_fun);
            params[1]--;
            params[2]--;
            return params;
        })
    );

    var res = [];
    for (var q = 0; q < Q; q++) {
        var op = ops[q];
        var t = op[0];
        var i = op[1];
        var j = op[2];

        if (t == 0) {
            var V = 1;
            var K = 0;
            for (var k = i; k <= j; k++) {
                var ap = APs[k];
                K += ap.p;
                if (ap.dp == -1) {
                    ap.dp = pow(ap.d, ap.p);
                }
                V *= ap.dp;
                V %= MOD;
            }
            V *= fact(K);
            V %= MOD;

            res.push(K + ' ' + V);
        }
        else if (t == 1) {
            for (var k = i ; k <= j; k++) {
                var ap = APs[k];
                ap.p += op[3];
                ap.dp = -1;
            }
        }
        else {}
    }
    console.log(res.join('\n'));
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});