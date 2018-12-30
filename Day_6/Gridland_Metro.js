var BigNumber = require('bignumber.js');
// Complete the gridlandMetro function below.
function gridlandMetro(n, m, k, track) {
	track.sort((a,b)=>a[1]-b[1]);
    
    let result = new BigNumber(n).times(m);
    let obj = {};
    for (let i=0; i<k; i++) {
        let [r, c1, c2] = track.shift();
        
        if (typeof obj[r] ==='undefined' || c1>obj[r][1]) {
            
            obj[r] = [c1, c2];
            result = result.minus(c2-c1+1);
        } else {
            if (c1<obj[r][0]){
				return "error";
			} 
            if (c1<=obj[r][1] && c2>obj[r][1]) {
                result = result.minus(c2-obj[r][1]);
                obj[r][1] = c2;
            }            
        }
    }
    return result.toString();	
}