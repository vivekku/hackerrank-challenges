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

function storyOfATree(n, edges, k, guesses) {
    const nodes = Array(n);
    for (let i=0; i<n; i++) {
        nodes[i] = {
            neighbors: [],
        };
    }
    edges.forEach((e) => {
        nodes[e[0]-1].neighbors.push(e[1]-1);
        nodes[e[1]-1].neighbors.push(e[0]-1);
    });
    buildTree(nodes, 0);
    const guessMap = Array(n);
    for (let i=0; i<n; i++) {
        guessMap[i] = [];
    }
    guesses.forEach((guess) => {
        guessMap[guess[1]-1].push(guess[0] - 1);
    });
    countMatch(nodes, guessMap, 0);
    let p = 0;
    const queue = [0];
    while (queue.length > 0) {
        const i = queue.shift();
        const node = nodes[i];
        let c = node.count;
        
        if (node.parent !== undefined) {
            const parent = nodes[node.parent];
            c = parent.count;
            if (guessMap[i].indexOf(node.parent) >= 0 ) {
                c--;
            }
            if (guessMap[node.parent].indexOf(i) >= 0) {
                c++;
            }
        }
        node.count = c;
        if (c >=k ) {
            p++;
        }
        node.children.forEach((j) => queue.push(j));
    }
    
    let q = n;
    let g = gcd(p, q);
    p = p / g;
    q = q / g;    
    return `${p}/${q}`;
}

function gcd(a, b) {
    while (b !== 0) {
        const mod = a % b;
        a = b;
        b = mod;
    }
    return a;
}

function buildTree(nodes, idx) {
    const root = nodes[idx];
    root.children = [];
    root.neighbors.forEach((i) => {
        if (root.parent !== i) {
            nodes[i].parent = idx;
            root.children.push(i);
            buildTree(nodes, i);
        }
    });
}

function countMatch(nodes, guessMap, idx) {
    const root = nodes[idx];
    let count = 0;
    root.children.forEach((i) => {
        if (guessMap[i].indexOf(idx) >= 0) {
            count++;
        }
        count += countMatch(nodes, guessMap, i);
    });
    root.count = count;
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);
        let edges = Array(n-1);

        for (let edgesRowItr = 0; edgesRowItr < n-1; edgesRowItr++) {
            edges[edgesRowItr] = readLine().split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const gk = readLine().split(' ');
        
        const g = parseInt(gk[0], 10);

        const k = parseInt(gk[1], 10);

        let guesses = Array(g);

        for (let guessesRowItr = 0; guessesRowItr < g; guessesRowItr++) {
            guesses[guessesRowItr] = readLine().split(' ').map(guessesTemp => parseInt(guessesTemp, 10));
        }

        let result = storyOfATree(n, edges, k, guesses);

        ws.write(result + "\n");
    }

    ws.end();
}
