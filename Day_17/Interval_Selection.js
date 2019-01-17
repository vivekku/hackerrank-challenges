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

function compare(interval1, interval2) {
    if (interval1[0] < interval2[0]) {
        return -1;
    } else if (interval1[0] === interval2[0]) {
        if (interval1[1] < interval2[1]) {
            return -1;
        } else if (interval1[1] === interval2[1]) {
            return 0;
        } else {
            return 1;
        }
    } else {
        return 1;
    }
}

function isIntersected(interval1, interval2) {
    [interval1, interval2] = [interval1, interval2].sort(compare);
    if (interval1[1] >= interval2[0]) {
        return true;
    } else {
        return false;
    }
}

/*
 * Complete the intervalSelection function below.
 */
function intervalSelection(intervals) {
    /*
     * Write your code here.
     */
    if (intervals.length <= 1) {
        return intervals.length;
    }
    intervals = intervals.sort(compare);
    let record = [intervals[0]];
    let count = 1;
    for (let i = 1; i < intervals.length; ++i) {
        const interval = intervals[i];
        if (record.length === 1) {
            if (!isIntersected(record[0], interval)) {
                count++;
                // record[0] won't intersect with the rest
                // update record[0]
                record[0] = interval;
            } else {
                count++;
                record[1] = interval;
            }
        } else if (record.length === 2) {
            if (!isIntersected(record[0], interval) && !isIntersected(record[1], interval)) {
                count++;
                record = [interval];
            } else if (!isIntersected(record[0], interval)) {
                count++;
                record[0] = interval;
            } else if (!isIntersected(record[1], interval)) {
                count++;
                record[1] = interval;
            } else { // triple intersects
                if (record[0][1] > interval[1] && record[0][1] > record[1][1]) {
                    record[0] = interval;
                } else if (record[1][1] > interval[1] && record[1][1] >= record[0][1]) {
                    record[1] = interval;
                }
            }
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = parseInt(readLine(), 10);

    for (let sItr = 0; sItr < s; sItr++) {
        const n = parseInt(readLine(), 10);

        let intervals = Array(n);

        for (let intervalsRowItr = 0; intervalsRowItr < n; intervalsRowItr++) {
            intervals[intervalsRowItr] = readLine().split(' ').map(intervalsTemp => parseInt(intervalsTemp, 10));
        }

        let result = intervalSelection(intervals);

        ws.write(result + "\n");
    }

    ws.end();
}
