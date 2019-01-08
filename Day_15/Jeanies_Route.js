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

/*
 * Complete the jeanisRoute function below.
 */
function jeanisRoute(k, roads) {
    /*
     * Write your code here.
     */
    const n = roads.length + 1;
    let visited = new Array(n);
    
    visited.map(_ => false);
    
    let graph = {};
    
    roads.forEach(road => {
        graph[road[0]] = graph[road[0]] || {};
        graph[road[0]][road[1]] = road[2];
        graph[road[1]] = graph[road[1]] || {};
        graph[road[1]][road[0]] = road[2];
    });
    
    const root = k[0];
        
    let needed = {};
    k.forEach(l => {needed[l] = true});
    
    const tree = calcTree(root, graph, needed, visited);
        
    return tree.three;
}

function calcTree(root, graph, needed, visited) {
    console.log(visited);
    let neighbours = graph[root];
    visited[root - 1] = true;
    let neighbourKeys = neighbours ? Object.keys(neighbours) : [];
    neighbourKeys = neighbourKeys.filter(key => !visited[key - 1]);
    
    neighbourKeys = neighbourKeys.map(key => calcTree(key, graph, needed, visited));
    
    let one = 0;
    neighbourKeys.forEach(tree => {
        one += tree.one == 0 && !needed[tree.root] ? 0 : tree.one + 2 * neighbours[tree.root];
    });
    
    let two = 0;
    let max = Number.MIN_SAFE_INTEGER, maxN;
    neighbourKeys.forEach(tree => {
        const diff = tree.one - tree.two + neighbours[tree.root];
        
        if (diff > max) {
            max = tree.one - tree.two;
            maxN = tree.root;
        }
    });
    
    neighbourKeys.forEach(tree => {
        if (tree.root == maxN)
            two += tree.two == 0 && !needed[tree.root] ? 0 : tree.two + neighbours[tree.root];
        else
            two += tree.one == 0 && !needed[tree.root] ? 0 : tree.one + 2 * neighbours[tree.root];
    });
    
    let sec = Number.MIN_SAFE_INTEGER, secN;
    maxN = NaN;
    max = Number.MIN_SAFE_INTEGER;
    let three1 = 0, three2 = 0;
    
    neighbourKeys.forEach(child => {
        const diff = child.one - child.two + neighbours[child.root];
        
        if (diff > max) {
            sec = max;
            max = diff;
            secN = maxN;
            maxN = child.num;
        } else if (diff > sec) {
            sec = diff;
            secN = child.num;
        }
    });
        
    neighbourKeys.forEach(child => {
        if (child.num == maxN || child.num == secN) {
            three1 += child.two == 0 && !needed[child.root] ? 0 : child.two + neighbours[child.root];
        } else {
            three1 += child.one == 0 && !needed[child.root] ? 0 : child.one + 2 * neighbours[child.root];
        }
    });
    
    maxN = NaN;
    max = Number.MIN_SAFE_INTEGER;
    
    neighbourKeys.forEach(tree => {
        if (tree.one - tree.three > max) {
            max = tree.one - tree.three;
            maxN = tree.root;
        }
    });
    
    neighbourKeys.forEach(tree => {
        if (tree.root == maxN)
            three2 += tree.three == 0 && !needed[tree.root] ? 0 : tree.three + 2 * neighbours[tree.root];
        else
            three2 += tree.one == 0 && !needed[tree.root] ? 0 : tree.one + 2 * neighbours[tree.root];
    });
    
    console.log(root);

    return {root: root, one: one, two: two, three: Math.min(three1, three2)};
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const city = readLine().split(' ').map(cityTemp => parseInt(cityTemp, 10));

    let roads = Array(n-1);

    for (let roadsRowItr = 0; roadsRowItr < n-1; roadsRowItr++) {
        roads[roadsRowItr] = readLine().split(' ').map(roadsTemp => parseInt(roadsTemp, 10));
    }

    let result = jeanisRoute(city, roads);

    ws.write(result + "\n");

    ws.end();
}
