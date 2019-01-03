var PRIME = (1000 * 1000 * 1000 + 7);

SumArr = function() {
    this.arr = [];
    this.push = function(x) {
        this.arr.push(x);
    };
    this.preprocess = function() {
        var small = 1, big = 2;
        while (big <= this.size()) {
            for (var i = big-1; i <this.size(); i+= big) {
                this.arr[i] += this.arr[i-small];
                this.arr[i] %= PRIME;
            }
            small *= 2;
            big *= 2;
        }
    };
    this.size = function() {
        return this.arr.length;
    };
    this.prefixSum = function(end) {
        var res = 0;
        var i, added = -1;
        while (added < end) {
            for (i = 1; added + i <= end; i *= 2)
                ;
            i /= 2;
            res += this.arr[added + i];
            res %= PRIME;
            added += i;
        }
        return res;
    };
    this.rangeSum = function(begin, end) {
        return (this.prefixSum(end) + PRIME - this.prefixSum(begin)) % PRIME;
    };
    this.elem = function(index) {
        if (index == 0) return this.prefixSum(index);
        else return this.rangeSum(index-1,index);
    };
    this.remove = function(index) {
        var val = this.elem(index);
        var small, big, next;
        while (index < this.size()) {
            this.arr[index] = (this.arr[index] + PRIME - val) % PRIME;
            for (small = 1, big = 2; (index+1) % big == 0; small *= 2, big *= 2)
                ;
            index += small;
        }
    }
    
}

function solve(n, arr) {
    var res = 0;
    var dists = new SumArr();
    var cities = new SumArr();
    var sumright, sumleft;
    var current;
    var res = 0;
    arr.sort(function (a, b) {
        if (a.dist < b.dist) return -1;
        if (a.dist > b.dist) return 1;
        return 0;
    });
    for (var i = 0; i < n; ++i) {
        arr[i].index = i;
        dists.push(arr[i].dist);
        cities.push(1);
    }
    dists.preprocess();
    cities.preprocess();
    arr.sort(function (a, b) {
        if (a.p > b.p) return -1;
        if (a.p < b.p) return 1;
        return 0;
    });
    for (var i = 0; i < n; ++i) {
        current = arr[i];
        sumright = dists.rangeSum(current.index, n-1) + PRIME -
            (cities.rangeSum(current.index, n-1) * dists.elem(current.index)) % PRIME;
        sumright %= PRIME;
        sumleft = (dists.elem(current.index)*cities.prefixSum(current.index)) % PRIME + PRIME - dists.prefixSum(current.index);
        sumleft %= PRIME;
        res += (sumright * current.p) % PRIME;
        res += (sumleft * current.p) % PRIME;
        res %= PRIME;
        dists.remove(current.index);
        cities.remove(current.index);
    }
    return res;
    
}
function processData(input) {
    var lines = input.split("\n");
    var t = parseInt(lines[0]);
    var n;
    for (var i = 0; i < t; ++i) {
        var dists = lines[2 + 3*i].split(" ");
        var p = lines[3 + 3*i].split(" ");;
        var arr = [];
        n = parseInt(lines[1 + 3*i]);
        for (var j = 0; j < n; ++j) {
            arr.push({dist: parseInt(dists[j]), p: parseInt(p[j])});
        }
        console.log(solve(n, arr));
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
