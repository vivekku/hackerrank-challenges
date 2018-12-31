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
 * Complete the treeCoordinates function below.
 */
function treeCoordinates(n, edges, points) {

    /*
     * Write your code here.
     */
    let somsiady = createListaSomsiadow(n, edges)
    //console.log(somsiady)
    
    let distances = Array(n+1)
     for(let i = 1; i<=n;i++){
           distances[i] = dfs(i, somsiady, n)
    }
    //console.log(distances)
    let len = points.length
    let max = -1
     for(let i = 0; i< len;i++){
       for(let j = i + 1;j<len;j++){
           let d = distances[points[i][0]][points[j][0]] + distances[points[i][1]][points[j][1]]
           max = max > d ? max : d
       }
    }
    return max
}

function createListaSomsiadow(n, edges){
    let vertices = []
     for (let verticesItr = 0; verticesItr < n + 1; verticesItr++) {
        vertices.push([])
    } 
    for (let edgesRowItr = 0; edgesRowItr < n-1; edgesRowItr++) {
        vertices[edges[edgesRowItr][0]].push(edges[edgesRowItr][1])
        vertices[edges[edgesRowItr][1]].push(edges[edgesRowItr][0])
    } 
    
    return vertices
}

function dfs(v, somsiady, n){
    let distances = Array(n+1)
    let parents = Array(n+1)
    distances[v] = 0
    parents[v] = -1
    let dfsR = function(d,v){
        for(let i = 0; i< somsiady[v].length;i++){
            if(distances[somsiady[v][i]] == undefined && distances[somsiady[v][i]] != 0){
            distances[somsiady[v][i]] = d;
            dfsR(d+1,somsiady[v][i])
         }
        }
    }
    
    dfsR(1,v)
    return distances
    
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let edges = Array(n-1);

    for (let edgesRowItr = 0; edgesRowItr < n-1; edgesRowItr++) {
        edges[edgesRowItr] = readLine().split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
    }

    let points = Array(m);

    for (let pointsRowItr = 0; pointsRowItr < m; pointsRowItr++) {
        points[pointsRowItr] = readLine().split(' ').map(pointsTemp => parseInt(pointsTemp, 10));
    }
    
    let result = treeCoordinates(n, edges, points);

    ws.write(result + "\n");

    ws.end();
}
