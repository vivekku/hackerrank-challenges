function playWithWords(s) {
    const memo = new Array(s.length);
    for(let i = 0; i < memo.length; i++){
        memo[i] = new Array(s.length);
    }
    
    const helper = (i,j)=>{
        if(j < i){ return 0; }
        if(memo[i][j] === undefined){
            if(s[i] === s[j]){
                if(i === j){ memo[i][j] = 1; }
                else{
                    memo[i][j] = 2 + helper(i+1,j-1);   
                }
            }
            else{
                memo[i][j] = Math.max(helper(i+1,j), helper(i,j-1)); 
            }
        }
        
        return memo[i][j];
    };
    
    let maxProd = 0;
    
    for(let i = 1; i < s.length -1; i++){
        maxProd = Math.max(maxProd, helper(0,i) * helper(i+1,s.length -1) );
    }    
    return maxProd;
}