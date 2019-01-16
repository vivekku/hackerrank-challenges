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

function getWays(n, c) {
	var table = [];
	var m = c.length
	table[0] = [];
	for (var i = 0; i < m; i++) {
		table[0].push(1);
	}
	for (var i = 1; i < n+1; i++) {
		table[i] = [];
		for (var j = 0; j < m; j++) {
			var coin = c[j];
			var x = (i-coin >= 0) ? table[i-coin][j]: 0;
			var y = (j >= 1)? table[i][j-1]: 0;
			table[i][j] = x + y;
		}
	}
	return table[n][m-1];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let ways = getWays(n, c);
	ws.write(ways + "\n");
    ws.end();
}
