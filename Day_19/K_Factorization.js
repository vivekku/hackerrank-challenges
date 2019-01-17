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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the kFactorization function below.
function kFactorization(n, A) {
    A.sort(function (a,b) {
        return b - a;
    });
    let factors = [n];
    for(let i = 0; i < A.length; i++) {
        if(n % A[i] == 0) {
            factors.push(n / A[i]);
            n = n / A[i];
            i--;   
        }
    }
    if(n != 1) {
        return [-1];
    }
    factors.reverse();
    return factors;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const A = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));

    let result = kFactorization(n, A);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
