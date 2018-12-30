function missingNumbers(dup, org) {

 var res=[];
    var duplicateMap =  new Map();
    var originalMap =  new Map();
    
    for(let i=0;i<dup.length;i++){
        if(!duplicateMap.has(dup[i])) {
            duplicateMap.set(dup[i],1);
        } else{
            duplicateMap.set(dup[i],duplicateMap.get(dup[i])+1);
        }            
    }
    
    for(let i=0;i<org.length;i++){
        if(!originalMap.has(org[i])) {
            originalMap.set(org[i],1);
        } else {
            originalMap.set(org[i],originalMap.get(org[i])+1);
        }            
    }
    
    originalMap.forEach((value,key) => {
        //if duplicateMap has originalMap key
       if(duplicateMap.has(key)){
           let diff = Math.abs(duplicateMap.get(key) - originalMap.get(key));
           //if diff is non zero then push
            if(diff){
                res.push(key);
            }
        }else{
          res.push(key);
       } 
    });
    return res.sort((a,b) => {return a-b});   
}