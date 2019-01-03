class Edge {
    constructor(u, v, w) {
        this.u = u;
        this.v = v;
        this.w = w;
    }
}
function comparator(e1, e2) {
        if (e1.w < e2.w) {
            return -1;
        }
        else if (e1.w > e2.w) {
            return 1;
        }
        else {
            if (e1.u < e2.u) {
                return -1;
            }
            else if (e1.u > e2.u) {
                return 1;
            }
            else {
                if (e1.v < e2.v) {
                    return -1;
                }
                else if (e1.v > e2.v) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
        }
    }
class UF {
    constructor(n) {
        this.sizes = new Array(n + 1).fill(1);
        this.parents = [];
        for (let i = 0; i <= n; i++) this.parents.push(i);
        this.numberOfWays = 0;
    }
    
    findRoot(i) {
        if (this.parents[i] === i) return i;
        return this.findRoot(this.parents[i]);
    }
    union(i, j) {
        let ir = this.findRoot(i);
        let jr = this.findRoot(j);
        if (this.sizes[ir] <= this.sizes[jr]) {
            let temp = ir;
            ir = jr;
            jr = temp;
            
        }
        let irs = this.sizes[ir];
        let jrs = this.sizes[jr];
        this.numberOfWays = this.numberOfWays - (irs) * (irs - 1) / 2 - jrs * (jrs - 1) / 2;
        this.parents[jr] = ir;
        this.sizes[ir] += this.sizes[jr];
        this.numberOfWays += this.sizes[ir] * (this.sizes[ir] - 1) / 2;
        return this.numberOfWays;
    }
}
function c(n, k) {
    let numerator = 1;
    for (let x = n; x > n - k; x--) {
        numerator *= x;
    }
    let denominator = 1;
    for (let x = k; x > 0; x--) {
        denominator *= x;
    }
    return numerator / denominator;
    
}
function isSorted(a) {
    
    for (let i = 1; i < a.length; i++) {
        if (a[i] < a[i - 1]) return false;
    }
    return true;
}


function processData(input) {
    const lines = input.split("\n");
    const line0 = lines[0].split(" ");
    const n = parseInt(line0[0]);
    const q = parseInt(line0[1]);
    let edges = [];
    for (let i = 1; i < n; i++) {
        const line = lines[i].split(" ");
        let e = new Edge(parseInt(line[0]), parseInt(line[1]), parseInt(line[2]));
        edges.push(e);
    }
    edges.sort(comparator);
    let values = [];
    for (let i = n; i < (n + q); i++) {

        const line = lines[i].split(" ");
        values.push(parseInt(line[0]));
        values.push(parseInt(line[1]));
       
    }
    values.sort(function(a, b) {
        return a - b;
    });
    
    let ways = [];
    let valueToWaysMap = {}
    let edgeIndex = 0;
    let prevEdgeIndex = 0;
    let prevWays = 0;
    let prevValue = -1;
    let uf = new UF(n);
    for (let i = 0; i < values.length; i++) {
        if (prevValue === values[i]) continue;
        prevValue = values[i];
        let numberOfWays = -1;
        while (edgeIndex < edges.length && edges[edgeIndex].w < values[i]) {
            let u = edges[edgeIndex].u;
            let v = edges[edgeIndex].v;
            numberOfWays = uf.union(u, v);
            edgeIndex++;
        }
        if (numberOfWays === -1) numberOfWays = prevWays;
        ways.push(numberOfWays);
        while (edgeIndex < edges.length && edges[edgeIndex].w === values[i]) {
            let u = edges[edgeIndex].u;
            let v = edges[edgeIndex].v;
            numberOfWays = uf.union(u, v);
            edgeIndex++;
        }
        prevWays = numberOfWays;
        ways.push(numberOfWays);
        valueToWaysMap[values[i]] = ways.length - 1;
    }
    
    for (let i = n; i < n + q; i++) {
        const line = lines[i].split(" ");
        let l = parseInt(line[0]);
        let r = parseInt(line[1]);
        let li = valueToWaysMap[l];
        let ri = valueToWaysMap[r];
        let subtracted = li > 0 ? ways[li - 1] : 0;
        console.log(ways[ri] - subtracted);
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
