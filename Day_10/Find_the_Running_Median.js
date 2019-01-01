function runningMedian(a) {
	
	function findPos(val, q){
    let l = 0, r = q.length-1;    
    while(l<=r){
        let m = Math.floor((l+r)/2);
        
        if(q[m] > val) {
            r = m - 1;
        }
        if(q[m] < val){
            l = m + 1;
        }
        if(q[m] == val){
            return m;
        }
    }
    return l;
	}

	function getMedian(q){
		let len = q.length;		
		if(len%2 == 0){
			let a = q[len/2];
			let b = q[len/2 -1];
			return ((a+b)/2).toFixed(1);
		}
		else{
			return q[Math.floor(len/2)].toFixed(1);
		}
	}
	
    var q = [], res = [];
    for(let cur of a){
        let pos = findPos(cur, q);        
        q.splice(pos, 0, cur);
        res.push(getMedian(q));
    }
    return res;
}