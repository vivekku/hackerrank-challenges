// a generic mutable tuple
var Node = function (key, value) {
    this.key = key;
    this.value = value;
};

// min-heap flavor of a binary priority queue
var MinHeap = function () {
    var nodes = [];

    var parent = function (i) {
        return (i - 1) >> 1;
    };

    var left = function (i) {
        return (i << 1) + 1;
    };

    var right = function (i) {
        return (i << 1) + 2;
    };

    this.isEmpty = function () {
        return nodes.length === 0;
    };

    // shift node at i up until it is at is rightful place (rebalance)
    var shiftUp = function (i) {
        var n = nodes[i];
        var p;

        while (i > 0) {
            p = parent(i);

            if (nodes[p].key <= n.key) {
                break;
            }

            nodes[i] = nodes[p];
            i = p;
        }

        nodes[i] = n;
    };

    // insert a node and move it up to its rightful place
    this.insert = function (key, value) {
        shiftUp(nodes.push(new Node(key, value)) - 1);
    };

    // shift node at i down to its rightful position (rebalance) 
    var shiftDown = function (i) {
        var c = nodes.length;
        var m = c >> 1;
        var n = nodes[i];
        var l;
        var r;
        var s;

        // while node at i has a child
        while (i < m) {
            l = left(i);
            r = right(i);

            // pick the smallest
            s = r < c && nodes[r].key < nodes[l].key
                ? r
                : l;

            // stop
            if (nodes[s].key > n.key) {
                break;
            }

            nodes[i] = nodes[s];
            i = s;
        }

        nodes[i] = n;
    };

    // remove the root node from the heap and return it (extract-min)
    this.remove = function () {
        var c = nodes.length;
        var n;

        if (c <= 0) {
            return undefined;
        }

        n = nodes[0];

        if (c === 1) {
            nodes.length = 0;
        } else {
            // move the last node to the root and rebalance
            nodes[0] = nodes.pop();
            shiftDown(0);
        }

        return n;
    };
};

// read the problem data
var readData = function (input) {
    input = input.split('\n');

    var t = input[0].split(' ');
    var N = parseInt(t[0]);
    var M = parseInt(t[1]);
    var K = parseInt(t[2]);

    // read the types of fish sold at each shop as a bit field
    var shop = input.slice(1, N + 1).map(function (e) {
        return e.split(' ').slice(1).reduce(function (p, c) {
            return p |= 1 << (c - 1);
        }, 0);
    });

    // read the graph of shops and roads as an adjacency list
    var graph = [];

    input.slice(N + 1).map(function (e) {
        var d = e.split(' ').map(Number);
        var x = d[0] - 1; // start
        var y = d[1] - 1; // end
        var z = d[2];     // travel time

        graph[x] = graph[x] || [];
        graph[y] = graph[y] || [];

        graph[x].push(new Node(y, z));
        graph[y].push(new Node(x, z));
    });

    return {
        N: N,
        M: M,
        K: K,
        shop: shop,
        graph: graph
    };
};

// init the shortest paths between nodes
var initPaths = function (a, n, k) {
    var i = 0;
    var j = 0;

    while (i < n) {
        a[i] = a[i] || [];

        while (j < k) {
            a[i][j] = Infinity;
            j += 1;
        }

        i += 1;
        j = 0;
    }
};

var processData = function (input) {
    var i = 0;
    var j = 0;
    var k;
    var m;
    var n;
    var r = Infinity;
    var s;
    var t;

    var data = readData(input);
    var heap = new MinHeap();
    var path = [];
    var enqueue = function (a, b, d) {
        if (path[a][b] > d) {
            path[a][b] = d;
            heap.insert(d, new Node(a, b));
        }
    };

    k = 1 << data.K;
    initPaths(path, data.N, k);
    enqueue(i, data.shop[i], 0);

    while (!heap.isEmpty()) {
        n = heap.remove();

        i = n.value.key;    // end node
        s = n.value.value;  // fish types found there
        t = n.key;          
        while (j < data.graph[i].length) {
            m = data.graph[i][j];
            enqueue(m.key, s | data.shop[m.key], t + m.value);

            j += 1;
        }

        j = 0;
    }

    i = 0;
    j = 0;
    while (i < k) {
        while (j < k) {
            if ((i | j) === k - 1) {
                r = Math.min(r, Math.max(path[data.N - 1][i], path[data.N - 1][j]));
            }

            j += 1;
        }

        i += 1;
        j = i;
    }

    console.log(r);
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});