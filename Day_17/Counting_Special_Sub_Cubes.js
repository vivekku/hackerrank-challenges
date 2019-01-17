'use strict';

Math.randBetween = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

Math.genRandomRange = function (limit, number) {
    let range = [];
    for (let i = 0; i < number; i++) {
        range.push(Math.randBetween(1, limit));
    }
    return range;
};

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

class Cube {

    constructor(cube) {
        this.cubes = [null, cube];
        this.size = cube.length;
        this.root = Math.round(this.size ** (1 / 3));
    }

    getCubes(subsize) { //generate the subcubes of a given size by combining the cubes one size smaller
        let arr = [];
        let sc = this.cubes[subsize - 1];
        let size = sc.length;
        let root = Math.round(size ** (1 / 3));
        let [a, b, c] = Cube.getTriplets(size - 1, root); //for any a x b x c subcubes
        for (let i = 0; i < size; i++) {
            let [x, y, z] = Cube.getTriplets(i, root); //filter out those cubes on the edge
            if (x > a - 1) continue;
            if (y > b - 1) continue;
            if (z > c - 1) continue;
            let indexes = Cube.getIndexes(i, root); //then each cube of the size - 1 can be combined with its neighbours
            let values = indexes.map(index => sc[index]);
            let max = Math.max(...values); //and the max taken to produce larger cubes
            arr.push(max);
        }
        this.cubes[subsize] = arr;
    }

    static evaluate(cube, limit) {
        return cube.filter(sc => sc === limit).length;
    }

    static getIndexes(n, size) {
        return [
            n,
            n + 1,
            n + size,
            n + size + 1,
            n + size ** 2,
            n + size ** 2 + 1,
            n + size ** 2 + size ** 1,
            n + size ** 2 + size ** 1 + 1
        ].map(Math.round)
    }

    static getTriplets(n, size) {
        let x = Math.floor(n / (size ** 2));
        let rx = n - (x * (size ** 2));
        let y = Math.floor(rx / (size ** 1));
        let ry = rx - (y * (size ** 1));
        let z = Math.floor(ry / (size ** 0)); //the number floored is itself
        return [x, y, z]
    }

    getSum() {
        let arr = [];
        for (let i = 1; i < this.root + 1; i++) {
            if (i > 1) this.getCubes(i);
            arr.push(Cube.evaluate(this.cubes[i], i));
        }
        return arr
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        const cube = readLine().split(' ').map(cubeTemp => parseInt(cubeTemp, 10));

        let values = new Cube(cube);
        let result = values.getSum();

        ws.write(result.join(" ") + "\n");
    }

    ws.end();
}

