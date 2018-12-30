function closestNumbers(arr) {
   let sorted = arr.sort((a,b) => a-b);
   let res =[];
   let final =[]
    for( let i = 0; i< sorted.length -1; i++){
       res.push(sorted[i+1] -sorted[i]);
    }
   let minimum = Math.min(...res);
    for( let j = 0; j < sorted.length-1; j++  ){
       if(sorted[j+1]- sorted[j] === minimum){
          final.push(sorted[j],sorted[j+1]);
       }
    }
    return final;
}