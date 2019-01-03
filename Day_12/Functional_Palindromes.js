function palindromes(s) {
    var single = s.split('').sort();
    var keys = [];
    var palindromes = {};
    for (var i = 0; i < single.length; i++) {
        palindromes['s' + i] = single[i];
        keys.push('s' + i);
    }
    
    (function odd() {
        var left = 0, right = -1, k;
        var count = new Array(s.length);
        var key;
        for (var i = 0; i < s.length; i++) {
            k = (i > right ? 0 : Math.min(count[left + right - i], right - i)) + 1;
            while (i + k < s.length && i - k >= 0 && s[i - k] === s[i + k]) {
                ++k;
            }
            count[i] = --k;
            if (k) {
                for (var j = 0; j < k; j++) {
                    key = 'o' + i.toString() + 'x' + j.toString();
                    palindromes[key] = s.substring(i - j - 1, i + j + 2);
                    keys.push(key);
                }
            }
            if (i + k > right) {
                left = i - k;
                right = i + k;
            }
        }
    })();

    (function () {
        var left = 0, right = -1, k;
        var count = new Array(s.length);
        var key;
        for (var i = 0; i < s.length; i++) {
            k = (i > right ? 0 : Math.min(count[left + right - i + 1], right - i + 1)) + 1;
            while (i + k - 1 < s.length && i - k >= 0 && s[i - k] === s[i + k - 1]) {
                ++k;
            }
            count[i] = --k;
            if (k) {
                for (var j = 0; j < k; j++) {
                    key = 'e' + i.toString() + 'x' + j.toString();
                    palindromes[key] = s.substring(i - j - 1, i + j + 1);
                    keys.push(key);
                }
            }
            if (i + k - 1 > right) {
                left = i - k;
                right = i + k - 1;
            }
        }
    })();
    
    return {
        keys: keys.sort(function (a, b) {
            return palindromes[a].localeCompare(palindromes[b]);
        }),
        values: palindromes
    };
}

var mod = Math.pow(10, 9) + 7;
var a = 100001;

function f(s) {
    var cache = [ 1 ];
    function pow(n) {
        if (cache.length <= n) {
            for (var i = cache.length; i <= n; i++) {
                cache.push( (cache[i-1] * a) % mod);
            }
        }
        return cache[n];
    }

    var l = s.length;
    var result = 0;
    for (var i = 0; i < l; i++) {
        result = (result + (s.charCodeAt(i) * pow(l - i - 1)) % mod ) % mod;
    }
    return result;
}

function processData(input) {
    input = input.split('\n');
    var q = parseInt(input[0].split(' ')[1]);
    var s = input[1];
    var p = palindromes(s);
    var cache = {};
    for (var i = 0; i < q; i++) {
        var query = parseInt(input[i + 2]);
        if (query > p.keys.length) {
            process.stdout.write('-1\n');
        } else {
            var palindrome = p.values[p.keys[query - 1]];
            if (cache[palindrome] === undefined) {
                cache[palindrome] = f(palindrome);
            }
            process.stdout.write(cache[palindrome] + '\n');
        }
    }
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
