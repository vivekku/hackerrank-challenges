function processData(input) {
    //Enter your code here
    const powerMod = (Math.pow(10, 9) + 7);
    var lines = input.split('\n');
    var [N, E, R] = lines[0].split(' ').map(val => parseInt(val));
    var nodes = lines.slice(1, N).map(val => val.split(' '));
    var queries = lines.slice(N, N + E).map(val => val.split(' '));
    var tree = {};
    var seen = [];
    for (var i = 0; i < nodes.length; i++) {
        var parent, descendant;
        var from = parseInt(nodes[i][0]);
        var to = parseInt(nodes[i][1]);
        var rf = R - from;
        var rt = R - to;
        if (Math.abs(rf) < Math.abs(rt)) {
            parent = nodes[i][0]; //from
            descendant = nodes[i][1]; //to
        } else {
            parent = nodes[i][1]; //to
            descendant = nodes[i][0]; //from
        }
        if (seen.indexOf(parent) > -1) {
            tree[parent].ds.push(descendant);
        } else {
            tree[parent] = {
                value: 0,
                ds: [descendant], // descendants
                ps: [] // parents
            }
            seen.push(parent);
        }
        if (seen.indexOf(descendant) > -1) {
            tree[descendant].ps.push(parent)
        } else {
            tree[descendant] = {
                value: 0,
                ds: [], // descendants
                ps: [parent] // parents
            }
            seen.push(descendant);
        }
    }


    function nonRecursiveUpdate(current, V, K) {
        var nodesToUpdate = [{id: current, dis: 0}]; // this holds the node to update, plus its distance value.
        while (nodesToUpdate.length > 0) {
            var nodeVars = nodesToUpdate.shift();
            var node = tree[nodeVars.id];
            var dis = nodeVars.dis;
            node.value += V + (dis * K);
            node.ds.forEach((value) => {
                nodesToUpdate.push({id: value, dis: dis + 1});
            })
        }
    }

    function nonRecusiveReport(start, end) {
        var localSum = 0;
        var currentNode = end;
        var startFound = false;
        while (startFound == false) {
            localSum += tree[currentNode].value;
            if (parseInt(currentNode) == parseInt(start) || parseInt(currentNode) == R) startFound = true;
            var parentNode = tree[currentNode].ps[0];
            currentNode = parentNode;
        }
        return localSum;
    }

    for (var i = 0; i < queries.length; i++) {
        var query = queries[i];
        if (query[0] == 'U') {
            var T = query[1];
            var V = parseInt(query[2]);
            var K = parseInt(query[3]);
            nonRecursiveUpdate(T, V, K);
        } else {
            var A = query[1];
            var B = query[2];
            var intA = parseInt(A);
            var intB = parseInt(B);
            var stringR = R.toString();
            var sum = 0;
            if ((intA < R && intB > R) || (intA > R && intB < R)) {
                sum += nonRecusiveReport(stringR, A);
                sum += nonRecusiveReport(stringR, B);
            } else {
                var aDistToRoot = Math.abs(R - intA);
                var bDistToRoot = Math.abs(R - intB);
                if (aDistToRoot < bDistToRoot) {
                    sum += nonRecusiveReport(A, B);
                } else {
                    sum += nonRecusiveReport(B, A);
                }
            }
            console.log(sum % powerMod);
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
    _input += input;
});

process.stdin.on("end", function() {
    processData(_input);
});
