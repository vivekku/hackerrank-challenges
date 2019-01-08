function processData(input) {
    var lines = input.split('\n');
    var lineIndex = 0;
    var nm = lines[lineIndex++].split(' ').map(Number);
    var n = nm[0];
    var m = nm[1];
    var edges = [];
    var visited = [];
    for (var i = 0; i < n; i++) {
        edges[i] = [];
        visited[i] = [];
    }
    for (var i = 0; i < m; i++) {
        var uvc = lines[lineIndex++].split(' ').map(Number);
        var u = uvc[0] - 1;
        var v = uvc[1] - 1;
        var c = uvc[2];
        edges[u].push({to: v, cost: c});
        edges[v].push({to: u, cost: c});
    }
    var se = lines[lineIndex++].split(' ').map(Number);
    var s = se[0] - 1;
    var e = se[1] - 1;

    var queue = [];
    queue.push({index: s, cost: 0});
    var min = -1;
    while (queue.length > 0) {
        var q = queue[0];
        var qIndex = 0;
        for (var i = 1, il = queue.length; i < il; i++) {
            if (q.cost > queue[i].cost) {
                q = queue[i];
                qIndex = i;
            }
        }
        queue.splice(qIndex, 1);
        if (min >= 0 && q.cost >= min) break;
        if (q.index === e) {
            min = min === -1 ? q.cost : Math.min(min, q.cost);
            continue;
        }
        visited[q.index].push(q.cost);
        var array = edges[q.index];
        for (var i = 0, il = array.length; i < il; i++) {
            var p = array[i];
            var cost2 = q.cost | p.cost;
            var array2 = visited[p.to];
            var match = false;
            for (var j = 0, jl = array2.length; j < jl; j++) {
                if ((cost2 & array2[j]) === array2[j]) {
                    match = true;
                    break;
                }
            }
            if (!match) queue.push({index: p.to, cost: cost2});
        }
    }

    console.log(min);
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
