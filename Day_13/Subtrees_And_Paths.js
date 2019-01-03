function connectBiDirectional(nodes, a, b) {
    let p = nodes[a];
    if (p.cs.indexOf(b) === -1) p.cs.push(b);
    let c = nodes[b];
    if (c.cs.indexOf(a) === -1) c.cs.push(a);
}

function add(nodes, ni, v) {
    const node = nodes[ni];
    node.v += v;
    node.cs.map(ci => add(nodes, ci, v));
}

function visit(visited, nodes, si, ti) {
    if (si === null) return null;
    if (visited[si] !== undefined) return null;
    visited[si] = true;
    
    const node = nodes[si];
    
    if (si === ti) {
        return [node];
    } else {
        if (node.p !== null) {
            const p = visit(visited, nodes, node.p, ti);
            if (p !== null)
                return [].concat([node], p);
        }
        for (let ci=0; ci<node.cs.length; ++ci) {
            const c = visit(visited, nodes, node.cs[ci], ti);
            if (c !== null) return [].concat([node], c);
        }
        return null;
    }
}

function max(nodes, si, ti) {
    const visited = {};
    const path = visit(visited, nodes, si, ti);
    if (path === null) return 0;
    const max = path.reduce((r, i) => Math.max(r,i.v), Number.MIN_SAFE_INTEGER);
    return max;
}

function determineParents(nodes, pid, visited) {
    if (visited[pid] !== undefined) return;
    visited[pid] = true;
    const node = nodes[pid];
    for (let ci=0; ci<node.cs.length; ++ci) {
        const child = nodes[node.cs[ci]];
        if (pid !== null) {
            child.p = pid;
            child.cs = child.cs.filter(c => c !== pid);
        }
        determineParents(nodes, node.cs[ci], visited);
    }
}

function processData(input) {
    let li = 0;
    const lines = input.split('\n');
    const N = Number(lines[li++]);
    
    const nodes = {};
    for (let ei=0; ei<N; ++ei) {
        nodes[ei] = { i: ei, cs: [], p: null, v: 0 };
    }
    
    for (let ei=0; ei<N-1; ++ei) {
        const [a, b] = lines[li++].split(' ').map(Number);
        connectBiDirectional(nodes, Math.min(a-1, b-1), Math.max(a-1, b-1));
    }
   
    determineParents(nodes, 0, {});
    
    const Q = Number(lines[li++]);
    for (let qi=0; qi<Q; ++qi) {
        const line = lines[li++];
        const [q, x, y] = line.split(' ');
        if (q === 'add') {
            add(nodes, Number(x)-1, Number(y));
        } else if (q === 'max') {
            console.log(max(nodes, Number(x)-1, Number(y)-1));
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
