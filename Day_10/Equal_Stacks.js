function equalStacks(h1, h2, h3) {
    const sum = (arr)=>{
       return arr.reduce((sum, value) => sum + value, 0)
   }

   let sum1 = sum(h1);
   let sum2 = sum(h2);
   let sum3 = sum(h3);
   let min = Math.min(sum1,sum2,sum3); 
    
   while(true){
       if(sum1>min){
           sum1 -= h1.shift();
       }
       if(sum2>min){
           sum2 -= h2.shift();
       }
       if(sum3>min){
           sum3 -= h3.shift();
       }
       
       if(sum1 === sum2 && sum2 === sum3){
          return min; 
       }
       min = Math.min(sum1,sum2,sum3);
   } 
}
