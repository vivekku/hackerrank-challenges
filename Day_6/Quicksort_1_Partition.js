function quickSort(ar) {
   var temp=0;
    var pivot=ar[0];
    var pIndex=ar.length-1;
    for(var i=ar.length-1;i>=1;i--){
        if(ar[i]>=pivot){
            temp=ar[i];
            ar[i]=ar[pIndex];
            ar[pIndex]=temp;
            pIndex-=1;
        }
    }
    temp=ar[pIndex];
    ar[pIndex]=ar[0];
    ar[0]=temp;
    return ar;  
}