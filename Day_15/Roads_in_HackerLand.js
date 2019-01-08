'use strict';

var _ = require('lodash/array');

class Queue {
    constructor() {
        this.arr = [];
    }

    enqueue(val) {
        this.arr.push(val)
    }

    dequeue() {
        var ret = this.arr[0];
        this.arr = this.arr.slice(1);
        return ret;
    }

    get queue() {
        return this.arr.slice();
    }

    get empty() {
        return this.arr.length == 0;
    }
}

class UnionFind {
    constructor(id) {
        this.id = id || (obj => obj);
        this.parent = new Map();
        this.sizes = new Map();
    }

    add(obj) {
        this.parent.set(this.id(obj), this.id(obj));
        this.sizes.set(this.id(obj), 1);
    }

    _rootRec(id) {
        var parent = this.parent.get(id)
        if (id != parent) {
            parent = this._rootRec(parent)
            this.parent.set(id, parent);
        }
        return parent;
    }

    root(obj) {
        var id = this.id(obj);
        return this._rootRec(id);

    }

    union(o1, o2) {
        if (this.root(o1) != this.root(o2)) {
            var size1 = this.sizes.get(this.root(o1));
            var size2 = this.sizes.get(this.root(o2));

            if (size1 >= size2) {
                var parent = this.root(o1);
                var child = this.root(o2)
            }
            else {
                var parent = this.root(o2);
                var child = this.root(o1);
            }

            this.parent.set(child, parent);
            var newSize = size1 + size2;
            this.sizes.set(parent, newSize);
        }
    }

    query(o1, o2) {
        if (!o1 || !o2) {
            return false
        }
        return this.root(o1) == this.root(o2)
    }

    unionSize(o1) {
        if (!this.root(o1)) {
            return 0;
        }

        return this.sizes.get(this.root(o1));
    }

}

class MinHeap {
    constructor(cmp) {
        this.cmp = cmp || function (a, b) {
            if (a === b) {
                return 0
            }
            else if (a < b) {
                return -1
            }
            else {
                return 1
            }
        }
        this.heap = [undefined]
        this.index = new Map();
    }

    findMin() {
        return this.heap[1]
    }

    deleteMin() {
        var min = this.heap[1];
        this.heap[1] = this.heap[this.size];
        this.heap.length -= 1;
        if (this.size > 0) {
            this.percolateDown();
        }
        this.index.delete(min.value);
        return min;
    }

    reheap(val) {
        var pos = this.index.get(val);
        var value = this.heap[pos]
        if (pos != 1 && this.cmp(value, this.heap[Math.floor(pos / 2)]) < 0) {
            this.percolateUp(pos);
        }
        if ((pos * 2 <= this.size) && this.cmp(value, this.minChild(pos)) > 0) {
            this.percolateDown(pos);
        }
    }

    delete(val) {
        var pos = this.index.get(val);
        var ret = this.heap[pos];
        this.index.delete(val);
        this.heap[pos] = this.heap[this.size];
        this.heap.length -= 1;
        if (pos <= this.size) {
            this.index.set(this.heap[pos].value, pos);
            this.reheap(this.heap[pos].value);
        }
        return ret;
    }

    insert(n) {
        this.heap[this.size + 1] = n;
        this.percolateUp();
    }

    get size() {
        return this.heap.length - 1
    }

    contains(val) {
        return this.index.get(val) || false
    }

    percolateDown(n) {
        var pos = n || 1
        var value = this.heap[pos];
        while ((2 * pos + 1 <= this.size || 2 * pos <= this.size) //has children
            && this.cmp(this.minChild(pos), value) < 0) { //min child is less then value
            var newPos = this.minChildIndex(pos); //get min child index
            this.heap[pos] = this.heap[newPos]; //swap min child up to pos
            this.index.set(this.heap[pos].value, pos); //update index
            pos = newPos;                       //update pos to minChild index
        }
        this.heap[pos] = value;                 //leave value at final pos
        this.index.set(this.heap[pos].value, pos); //update index
    }

    percolateUp(n) {
        var pos = n || this.size;
        var value = this.heap[pos];
        while (pos > 1 && this.cmp(this.heap[Math.floor(pos / 2)], value) > 0) { //parent is greater than child
            this.heap[pos] = this.heap[Math.floor(pos / 2)] //swap down parent
            this.index.set(this.heap[pos].value, pos); //update index
            pos = Math.floor(pos / 2);    //update to pos to parent
        }
        this.heap[pos] = value;
        this.index.set(value.value, pos);
    }

    minChildIndex(pos) {
        if (2 * pos > this.size) {
            throw new Error('Heap size property violated: {pos:' + pos + ',size:' + this.size + '}')
        }

        if (2 * pos + 1 > this.size) {
            return 2 * pos
        }
        else {
            return this.cmp(this.heap[2 * pos], this.heap[2 * pos + 1]) < 0 ? 2 * pos : 2 * pos + 1
        }
    }

    minChild(pos) {
        return this.heap[this.minChildIndex(pos)]
    }
}

class Vertex {
    constructor(value) {
        this.val = value;
        this.adjList = [];
    }

    addEdge(edge) {
        this.adjList.push(edge);
    }

    get value() {
        return this.val;
    }

    get adjacencyList() {
        return this.adjList.slice();
    }
}

class Edge {
    constructor(a, b, distance) {
        this.ends = [a, b];
        this.updateAdj(a, b);
        this.dist = distance;
    }

    updateAdj(a, b) {
        a.addEdge(this);
        b.addEdge(this);
    }

    get distance() {
        return this.dist
    }
    end(start) {
        return start.value == this.ends[0].value ? this.ends[1] : this.ends[0];
    }
}

class Graph {
    constructor() {
        this.nodeList = [];
        this.nodeDict = new Map();
        this.edgeList = [];
        this.unsortedEdges = true;
    }

    addVertex(vert) {
        if (!(vert instanceof Vertex))
            vert = new Vertex(vert)
        this.nodeList.push(vert);
        this.nodeDict.set(vert.value, vert);
    }

    addEdge(a, b, dist) {
        var edge = new Edge(this.vertex(a), this.vertex(b), dist);
        this.edgeList.push(edge);
        return edge;
    }

    get edges() {
        return this.edgeList.slice();
    }

    get vertices() {
        return this.nodeList.slice();
    }

    get vertexCount() {
        return this.nodeList.length;
    }

    get edgeCount() {
        return this.edgeList.length;
    }

    vertex(val) {
        return this.nodeDict.get(val);
    }

    getMinSpanningTree() {
        var newTree = new Graph();
        newTree.unsortedEdges = true;
        this.edgeList.sort((e1, e2) => (e1.distance - e2.distance));
        var vUnion = new UnionFind(v => v.value);
        this.nodeList.forEach(v => vUnion.add(v));

        for (var i = 0; i < this.edgeList.length && vUnion.unionSize(this.nodeList[0]) != this.nodeList.length; i += 1) {
            var e = this.edgeList[i],
                v1 = e.ends[0],
                v2 = e.ends[1];

            if (!vUnion.query(v1, v2)) {
                if (!newTree.vertex(v1.value)) {
                    newTree.addVertex(v1.value);
                }
                if (!newTree.vertex(v2.value)) {
                    newTree.addVertex(v2.value);
                }
                newTree.addEdge(v1.value, v2.value, e.distance);

                vUnion.union(v1, v2);
            }
        }
        return newTree;
    }
}

function runCase(_case) {
    var graph = new Graph();

    for (var i = 1; i <= _case.nodeCount; i += 1) {
        graph.addVertex(i)
    }


    for (var i = 0; i < _case.edges.length; i += 1) {
        var edge = _case.edges[i];
        graph.addEdge(edge[0], edge[1], edge[2]);
    }
    var minSpanningTree = graph.getMinSpanningTree();

    var result = 0;
    var edgeVertexCountCache = new Array(graph.edgeCount);

    function connectedNodes(edge, vertex) {
        var edgeVertexMap = edgeVertexCountCache[edge.distance]
        if (edgeVertexMap) {
            var vertexCount = edgeVertexMap[vertex.value]
            if (vertexCount) {
                return vertexCount;
            }
        }
        else {
            edgeVertexMap = edgeVertexCountCache[edge.distance] = {}
        }
        var nodeCount = 1
        for (var i = 0; i < vertex.adjList.length; i += 1) {
            if (vertex.adjList[i] != edge) {
                nodeCount = nodeCount + connectedNodes(vertex.adjList[i], vertex.adjList[i].end(vertex))
            }
        }
        edgeVertexMap[vertex.value] = nodeCount;
        return nodeCount;
    }

    function totalUses(edge) {
        var end1 = edge.ends[0];
        var end2 = edge.ends[1];

        end1 = connectedNodes(edge, end1);
        end2 = connectedNodes(edge, end2);
        return end1 * end2;
    }
    result = minSpanningTree.edgeList.reduce(function (totals, edge) {
        totals[edge.distance] = totalUses(edge);
        return totals
    }, new Array(_case.edgeCount));
    for (var power = 0; power < result.length; power += 1) {
        var shift = 0;
        while (result[power] > 1) {
            shift = Math.log2(result[power]);
            if (!Number.isInteger(shift)) {
                shift = Math.floor(shift);
                result[power] -= Math.pow(2, shift);
            }
            else {
                result[power] = 0
            }
            result[power + shift] = result[power + shift] ? result[power + shift] + 1 : 1;
        }
    }
    var output = '';
    var foundMostSigFig = false;
    for (var i = result.length - 1; i >= 0; i -= 1) {
        result[i] = isNaN(result[i]) ? 0 : result[i];
        if (result[i] == 1) {
            foundMostSigFig = true;
        }
        if (foundMostSigFig) {
            output += result[i];
        }
    }
    process.stdout.write(output);
}


function processData(input) {
    var lines = input.split('\n');

    function getCase() {
        var cursor = 0
        var _case = {};
        var caseDesc = lines[cursor];
        cursor += 1;
        _case.nodeCount = parseInt(caseDesc.split(" ")[0]);
        _case.edgeCount = parseInt(caseDesc.split(" ")[1]);
        _case.edges = new Array(_case.edgeCount);
        for (var i = 0; cursor < lines.length; i += 1) {
            _case.edges[i] = (parseEdge(lines[cursor]))
            cursor += 1
        }
        cursor += _case.edgeCount;
        return _case;
    }

    function parseValue(value) {
        return parseInt(value);
    }

    function parseEdge(line) {
        var ends = line.split(' ');
        return ends.map(parseValue);
    }
    runCase(getCase());
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});

