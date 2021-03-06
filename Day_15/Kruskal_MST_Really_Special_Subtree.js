function processData(input) {
  var lines = input.split('\n');
  var dimensions = lines.shift().split(' ').map(Number);
  var N = dimensions[0];
  var M = dimensions[1];
  var S;

  var graph = {
    edges: [],
    setUnion: [],
    setSize: []
  };

  for (var i = 0; i < N; i++) {
    graph.setUnion[i] = i;
    graph.setSize[i] = 1;
  }

  for (var i = 0; i < M; i++) {
    var edge = lines.shift().split(' ').map(Number);
    graph.edges.push(edge);
  }

  S = parseInt(lines.shift(), 10) - 1;

  console.log(kruskal(graph));
}

function kruskal(graph) {
  var cost = 0;
  graph.edges.sort(function (a, b) {
    var ret = a[2] - b[2];
    if (ret !== 0) { return ret; }

    var coeffA = a.reduce(function (prev, next) { return prev + next; });
    var coeffB = b.reduce(function (prev, next) { return prev + next; });

    return coeffA - coeffB;
  });

  for (var i = 0; i < graph.edges.length; i++) {
    var edge = graph.edges[i];

    if (parent(graph, edge[0]) === parent(graph, edge[1])) {
      continue;
    }

    union(graph, edge[0], edge[1]);
    cost += edge[2];
  }

  return cost;
}

function parent(graph, i) {
  if (graph.setUnion[i] === i) {
    return i;
  } else {
    return parent(graph, graph.setUnion[i]);
  }
}

function union(graph, a, b) {
  var rootA = parent(graph, a);
  var rootB = parent(graph, b);

  if (rootA === rootB) { return; }

  if (graph.setSize[rootA] > graph.setSize[rootB]) {
    graph.setUnion[rootB] = rootA;
    graph.setSize[rootA] += graph.setSize[rootB];
  } else {
    graph.setUnion[rootA] = rootB;
    graph.setSize[rootB] += graph.setSize[rootA];
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
