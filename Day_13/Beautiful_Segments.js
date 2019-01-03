'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the solve function below.
function solve(a, queries) {
    var res = [];
    for (var i = 0; i < queries.length; i++) {
        var q = queries[i];
        var left = q[0]-1;
        var right = q[1]-1;
        var limit = q[2];
        var counter = 0;
        while (left <= right) {
            var total = a[left];
            for(var j = left; j <= right; j++) {
                var next = a[j];
                total = total & next;
                if(total <= limit) {
                    counter++;
                }
            }
            ++left;
        }
        res.push(counter);
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nq = readLine().split(' ');

    const n = parseInt(nq[0], 10);

    const q = parseInt(nq[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let queries = Array(q);

    for (let queriesRowItr = 0; queriesRowItr < q; queriesRowItr++) {
        queries[queriesRowItr] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = solve(a, queries);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
