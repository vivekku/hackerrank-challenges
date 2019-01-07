function Graph() { 
    var node=[], adj=[]; node.push(null); adj.push(null);
    return { 
        addN: function(x,y) {node.push({x:x,y:y});}, 
        addE: function(v,w) { 
            if(adj[v]==null) adj[v] = [];
            if(adj[w]==null) adj[w] = [];
            adj[v].push(w);
            adj[w].push(v);
        },
        adj: function(v) { return adj[v]; },
        dist: function(v,w) { 
            var x=Math.abs(node[v].x-node[w].x);
            var y=Math.abs(node[v].y-node[w].y);
            return {x:x,y:y};
        },
        n:node, 
        a:adj };
}

function BFS(G,s,N,H,V) { 
    var q=[], m=[], reached=0, i;
    q.push(s); m[s]={x:0,y:0};
    while(q.length>0) {
        var v=q.shift(), adj=G.adj(v), n=adj.length;
        for (i=0;i<n;++i) {
            var w=adj[i], d=G.dist(v,w), dH=d.x+m[v].x, dV=d.y+m[v].y;
            if ( dH>H || dV>V ) continue;
            if (m[w]==null || m[w].x>dH || (m[w].x==dH && m[w].y>dV)) {
                m[w]={x:dH,y:dV};
                q.push(w);
            }
        }
    }
    for ( i=1,reached=0; i<=N; ++i ) { if ( m[i]!=null) ++reached; }
    return { 
        m:m, reached:reached, notReached:N-reached
    };
}

function processData(input) {
    input = input.split(/\s+/); var index=0;
    function get() { return input[index++]|0; }
    var N=get(), H=get(), V=get(), i, G = new Graph();
    for ( i=0; i<N; ++i ) {
        var x=get(), y=get();
        G.addN(x,y);
    }
    for ( i=0; i<N-1; ++i ) {
        var v=get(), w=get();
        G.addE(v,w);
    }
    var cnt=0;
    for ( i=1; i<=N; ++i ) {
        var b = BFS(G,i,N,H,V);
        cnt += b.notReached;
    }
    console.log(cnt/2);
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
