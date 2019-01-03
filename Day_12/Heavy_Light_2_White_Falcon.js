function findPath(tree,u,v,visited) {
    if(u == v)
        return [true,[v]];
    if(!tree[u][1].length)
        return [false,[]];
    visited.push(u);
    
    for(var node of tree[u][1]) {
        if(visited.indexOf(node) == -1) {
            var res = findPath(tree,node,v,visited)
            if(res[0]) {
                res[1].unshift(u)
                return [true,res[1]]
            }
        }
    }
    return [false,[]];
}

function processData(input) {
    //Enter your code here
    var lines = input.split('\n');
    var [N,Q] = lines.shift().split(' ').map((i)=> parseInt(i));
    var tree = [];
    for(var j=0; j < N; j++)
        tree.push([0,[]])
    var data = lines.splice(0,N-1);
    for(var line of data) {
        var [x,y] = line.split(' ').map((i)=> parseInt(i))
        tree[x][1].push(y);
        tree[y][1].push(x);
    }

    for(var q of lines) {
        q = q.split(' ').map((i)=> parseInt(i,10))
        var path = findPath(tree,q[1],q[2],[])[1]
        var x = q[3];
        if(q[0] == 1) {
            for(var node of path) {
                tree[node][0] += x;
                x += q[3];
            }
        } else {
            var sum = 0;
            for(var node of path) {
                sum += tree[node][0]
            }
            console.log(sum % 1000000007)
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
