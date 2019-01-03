function processData(input) {
    var lines = input.split("\n");
    var l1 = lines[0].split(' ');
    var n = l1[0];
    var q = l1[1];
    var arrTree = [];
	
    for (var i = 0; i < n-1; i++) {
        addEdge(lines[i+1].split(' '));
    };

    for (var i = n; i < lines.length; i++) {
        var l = lines[i].split(' ');
        if (l[0] == 1) {
            q1(l[1],l[2])
        }else{
            q2(l[1],l[2])
        }
    };

    function addEdge(edge){
        edge[0] = parseInt(edge[0]);
        edge[1] = parseInt(edge[1]);
        arrTree[edge[0]] = arrTree[edge[0]] || {index:edge[0], val:0 , parent:null}; 
        arrTree[edge[1]] = arrTree[edge[1]] || {index:edge[1], val:0 , parent:null}; 

        arrTree[edge[0]].parent = arrTree[edge[1]];
    }

    function q1(u,x){
        arrTree[ u ].val = parseInt(x);
    }

    function q2(u,v){
        var node = arrTree[u];
        var pathUp_u = [];
        var visited = {}
        do{
            visited[node.index] = true;
            pathUp_u.push(node);
            node=node.parent;
        }while(node);
        var node = arrTree[v];
        var sum = 0;

        while(true){
            if (visited[node.index]) {
                break;
            };
            sum+=node.val;
            if (!node.parent) {
                break;
            };
            node=node.parent;
        }
        for (var i = 0; i < pathUp_u.length; i++) {
            sum+=pathUp_u[i].val;

            if (pathUp_u[i].index == node.index) {
                break;
            };
        };
        console.log(sum);
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
