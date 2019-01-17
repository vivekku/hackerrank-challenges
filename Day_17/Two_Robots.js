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

function twoRobots(m, queries) {
    let total = queries.length,
        pathTracking = Array(total);    
    for (let i = 0; i < total; ++i) {
        pathTracking[i] = Array(total);
    }    
    for (let i = total - 1; i >= 0; --i) {
        for (let j = total - 1; j >= 0; --j) {
            pathTracking[i][j] = -1;
        }
    }    
    function dp(r1, r2) {
        if (r1 + 1 === total || r2 + 1 === total) {
            return 0;
        }        
        if (pathTracking[r1 + 1][r2 + 1] !== -1) {
            return pathTracking[r1 + 1][r2 + 1];
        } 
        let i = Math.max(r1, r2) + 1,
            robot1Distance = 0,
            robot2Distance = 0,
            direction1 = dp(r1, i),
            direction2 = dp(i, r2),
            baseDistance = Math.abs(queries[i][0] - queries[i][1]);
        if (r2 !== -1) {
            robot2Distance = Math.abs(queries[r2][1] - queries[i][0]);
        }
        if (r1 !== -1) {
            robot1Distance = Math.abs(queries[r1][1] - queries[i][0]);
        }
        let min = Math.min(robot2Distance + direction1 + baseDistance, robot1Distance + direction2 + baseDistance);
        pathTracking[r1 + 1][r2 + 1] = min;
        return min;
    }    
    return dp(-1, -1);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const t = parseInt(readLine(), 10);
    for (let i = 0; i < t; i++){            
        const mn = readLine().split(' ');
        const m = parseInt(mn[0], 10);
        const n = parseInt(mn[1], 10);
        let queries = Array(n);
        for (let queriesRowItr = 0; queriesRowItr < n; queriesRowItr++) {
            queries[queriesRowItr] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
        }
        let result = twoRobots(m, queries);
        ws.write(result + "\n");
    }
    ws.end();
}
