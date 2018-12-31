'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function createTree(c, edges) {
    var nodes = [];
    for(var i=0; i<c.length; i++) {
        var cI = c[i];
        nodes[i+1] = {
            val: cI,
            parentNode: 0,
            childs: [],
            ind: (i+1),
            sum: cI,
            
            relations: []
        };
    }
    
    for(var i=0; i<edges.length;i++) {
        var e = edges[i];
        var e1 = e[0];
        var e2 = e[1];
        var nE1 = nodes[e1];
        var nE2 = nodes[e2];
        nE1.relations.push(nE2);
        nE2.relations.push(nE1); 
    }
    
    var root = nodes[1];
    var usedNodes = [];
    buildTree(root, usedNodes, nodes);
    return nodes;
}

function buildTree(root, usedNodes, nodes) {
    for(var i=0; i<root.relations.length; i++) {
        var r = root.relations[i];
        if(usedNodes[r.ind]) {
            continue;
        }
        
        root.childs.push(r);
        r.parentNode = root.ind;
    }
    
    usedNodes[root.ind] = true;
    for(var i=0; i<root.childs.length; i++) {
        var r = root.childs[i];  
        buildTree(r, usedNodes, nodes);
        root.sum += r.sum;  
    }
}

function existsHalf(root, halfSum) {
    if(root.sum == halfSum) {
        return true;
    }
    
    for(var i=0; i<root.childs.length; i++) {
        var r = root.childs[i];  
        if(existsHalf(r, halfSum)) {
            return true;
        }
    } 
    
    return false;
}

function isParent(i, j, nodes) {
    var t = j;
    while(nodes[t].parentNode != 0) {
        if(nodes[t].parentNode == i) {
            return true;
        }
        
        t = nodes[t].parentNode;
    }
    
    return false;
}

// Complete the balancedForest function below.
function balancedForest(c, edges) {
    var nodes = createTree(c, edges);
    var root = nodes[1];
    var totalSum = root.sum;
    var min = undefined;
    if(totalSum%2 == 0 && existsHalf(root, totalSum/2)) {
       min = totalSum/2;
    }
    
    var n = c.length;
    var potentialNodes = [];
    
    for(var i=1; i<=n; i++) {
        var nodeI = nodes[i];
        if(totalSum/3 <= nodeI.sum && nodeI.sum <= 2*totalSum/3) {
            potentialNodes.push(nodeI);
        }
    }
    
    for(var i=0; i<potentialNodes.length; i++) {
        var nodeI = potentialNodes[i];
        
        for(var j=1; j<=n; j++) {
            var nodeJ = nodes[j]; 
            if(nodeJ.ind == nodeI.ind) {
                continue;
            }
            
            var s1 = nodeI.sum;
            var s2 = nodeJ.sum;
            
            if(isParent(nodeI.ind, nodeJ.ind, nodes)) {
                s1 = nodeJ.sum;
                s2 = nodeI.sum - nodeJ.sum;
            } else if(isParent(nodeJ.ind, nodeI.ind, nodes)) {
                s1 = nodeI.sum;
                s2 = nodeJ.sum - nodeI.sum;
            }
            
            var s3 = totalSum - s1 - s2;
            if(s1 == s2) {
                if(s3 < s1) {
                    min = min == undefined ? s1-s3 : Math.min(min, s1-s3);
                }
            } else if(s1 == s3) {
                if(s2 < s1) {
                    min = min == undefined ? s1-s2 : Math.min(min, s1-s2);
                }                
            } else if(s2 == s3) {
                if(s1 < s2) {
                    min = min == undefined ? s2-s1 : Math.min(min, s2-s1);
                }                    
            }
        }      
    }
    
    //debugger;
    return min || -1;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

        let edges = Array(n - 1);

        for (let i = 0; i < n - 1; i++) {
            edges[i] = readLine().split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const result = balancedForest(c, edges);

        ws.write(result + '\n');
    }

    ws.end();
}
