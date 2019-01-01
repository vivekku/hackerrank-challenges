function knightlOnAChessboard(n) {
	var res =[];
	for(let a=1;a<n;++a){
		res [a-1] = [];
        var ans = "";
        for(let b=1;b<n;++b){
            var xx = [a,a,-a,-a,b,b,-b,-b]
            var yy = [b,-b,b,-b,a,-a,a,-a];
            var q = [];            
            q.push([0,0]);
            var d = new Array(n+1);
            for(i=0;i<n+1;++i){
                d[i] = new Array(n+1);
                d[i].fill(0);
            }
            d[0][0]=0;
            while(q.length>0){
                var p = q.shift();
                var x = p[0];
                var y = p[1];
                for(var i=0;i<8;++i){
                    var newx = parseInt(x + xx[i]);
                    var newy = parseInt(y + yy[i]);
                    if(newx>=0 && newx<n && newy>=0 && newy<n && d[newx][newy] === 0){
                        q.push([newx,newy]);
                        d[newx][newy] = d[x][y]+1;
                    }                    
                }
            }
            if(d[n-1][n-1] !==0){
                ans+=d[n-1][n-1] + ' ';
            }
            else{
                ans+="-1 ";
            }            
        }
        res[a-1].push(ans);
    }
	return res;
}