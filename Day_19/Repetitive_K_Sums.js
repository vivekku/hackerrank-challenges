function *kSeriesTree(v, n, k, currentK) {
    if (currentK > k) {
        return;
    } else {
        if (v.length === n) {
            if (currentK === k) {
                yield v.reverse();
            } else {
                return;
            }
        } else if (v.length < n) {
            for(var i = 0; i < k+1; i++) {
                let newV = v.slice();
                newV.push(i);
                yield *kSeriesTree(newV, n, k, currentK + i);
            }
        } else {
            return;
        }
    }
}

function calculateSum(vector, solutions) {
    let sum = 0;
    for(var i=0; i< solutions.length; i++){
        sum += vector[i] * solutions[i];
    }
    return sum;
}

function solve(t) {
    let a0 = t.sums[0] / t.k;
    let knownSolutions = [a0];
    let kGen = kSeriesTree([], t.n, t.k, 0);
    let tHead = 0;
    while (knownSolutions.length < t.n) {
        let vec = kGen.next().value;
        if (vec[0] === t.k - 1) {
            let newSolution = t.sums[0] - a0*(t.k -1);
            knownSolutions.push(newSolution);
        }
        let sum = calculateSum(vec, knownSolutions);
        let index = t.sums.indexOf(sum);
        if (index < 0)  {
            let e = `Sum not found in t.sums ${JSON.stringify({vec, sum, knownSolutions, sums:t.sums})}`;
            console.log(e);
            throw new Error(e);
        }
        t.sums.splice(index, 1);
    }
    console.log(knownSolutions.join(' '));
    return knownSolutions;
}

function processData(input) {
    var lines = input.split('\n');
    var tCount = Number(lines[0]);
    var i = 1;
    var tests = [];
    while(i < tCount * 2) {
        let [n, k] = lines[i++].split(' ').map(Number);
        let sums = lines[i++].split(' ').map(Number).sort((a, b) => a - b);
        let test = {
            n,
            k,
            sums
        };
        solve(test);
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
