function processData(input) {
    var lines = input.split("\n");
    var T = Number(lines.shift());
    
    for (var t=0; t<T; t++) {
        var nm = lines.shift().split(' ').map(Number);
        var N = nm[0];  // Number of nodes
        var M = nm[1];  // Number of edges
        var E = [];
        var distance = [0];
        for (var n=0; n<=N; n++) {
            E[n] = {};
            distance[n] = -1;
        }
        
        for (var m=0; m<M; m++) {
            var e = lines[m].split(' ').map(Number);
            E[e[0]][e[1]] = e[1];
            E[e[1]][e[0]] = e[0];
        }
        lines = lines.slice(M);
        var S = Number(lines.shift());
        
        var queue = [E[S]];
        distance[S] = 0;
        
        var next_distance = 6;
        while (queue.length > 0) {
            var items = queue.shift();
            
            var next = {};
            
            for (var n in items) {
                distance[n] = next_distance;
                for (var nn in E[n]) {
                    next[nn] = nn;
                }
            }
            
            var add_next = false;
            var final_next = {}

            for (var nn in next) {
                if (distance[nn] === -1) {
                    final_next[nn] = nn;
                    add_next = true;
                }
            }        
            if (add_next)
                queue.push(final_next);
            
            next_distance += 6;
        }
        
        distance.splice(S,1);
        distance.splice(0,1);
        console.log(distance.join(' '));
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

