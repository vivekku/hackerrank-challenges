function largestRectangle(h) {

    let max = 0;
   
     for(let i = 0; i < h.length; i++)  
     {
          let goodPerim = 1;
          for(let x = (i + 1); x < h.length; x++)
           {
               if(h[i] <= h[x])
                {
                    goodPerim++;
                } 
                else 
                {
                     break;         
                }
           }
           for(let y = (i - 1); y >= 0; y--)
           {
              if(h[i] <= h[y])
               {
                   goodPerim++;
               }
               else
               { 
                    break;         
               }
            }
         if(h[i] * goodPerim > max)
             {
                 max = h[i] * goodPerim;
             }
     }
    return max;
}
