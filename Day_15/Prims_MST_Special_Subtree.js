function processData(input) {
    input = input.split("\n");
    var first = input[0].split(" "), i;
    var n = parseInt(first[0]),
        m = parseInt(first[1]);
    var edges = {};
    for (i = 0; i < n; ++i) {
        edges[i + 1] = {}; 
    }
    for (i = 0; i < m; ++i) {
        var line = input[i + 1].split(" "),
            a = parseInt(line[0]),
            b = parseInt(line[1]),
            r = parseInt(line[2]);
        edges[a][b] = r;
        edges[b][a] = r;
    }
    var total = 0,
        visited = {};
    visited[parseInt(input[input.length - 1])] = true;
    for (i = 1; i < n; ++i) {
        var min = 999999,
            nextVisited;
        for (var x in visited) {
            for (var y in edges[x]) {
                if (! visited[y] && edges[x][y] < min) {
                    min = edges[x][y];
                    nextVisited = y;
                }
            }
        }
        visited[nextVisited] = true;
        total += min;
    }
    console.log(total);
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
