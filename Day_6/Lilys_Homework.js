function lilysHomework(arr) {    
    var arrCpy= arr.slice();
    var arrCpy2= arr.slice();
    var indexArr=[];
    var count=0;
    var index;
    var temp; 
    var decCount=0;
    
    for(var i=0; i<arr.length; i++){
        indexArr[arr[i]]=i;
    }
    
    arr.sort(function(a,b){return a-b});
    var sortedArrCpy= arr.slice();
    var decSort = sortedArrCpy.reverse();
    
    for(var i=0; i<arr.length; i++){
        if(arr[i]!=arrCpy[i]){
            temp=arrCpy[i];
            index= indexArr[arr[i]];
            indexArr[arr[i]]=i;
            indexArr[arrCpy[i]]=index;
            arrCpy[i]=arr[i];
            arrCpy[index]=temp;
            count++;
        }
    }

    indexArr=[];  
    for(var i=0; i<arrCpy2.length; i++){
        indexArr[arrCpy2[i]]=i;
    }
    for(var i=0; i<decSort.length; i++){
        if(decSort[i]!=arrCpy2[i]){
            temp=arrCpy2[i];
            index= indexArr[decSort[i]];
            indexArr[decSort[i]]=i;
            indexArr[arrCpy2[i]]=index;
            arrCpy2[i]=decSort[i];
            arrCpy2[index]=temp;
            decCount++;
        }
    }
    return Math.min(count,decCount);
}