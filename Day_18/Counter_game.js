function counterGame(n) {
  let steps = 0;
  while (n > 1) {
    if (parseInt(Math.log2(n)) == Math.log2(n)) {
      n /= 2;
    }
    else { 
      n-=Math.pow(2,parseInt(Math.log2(n)));
    }    
    steps++;
   }
  return steps % 2 == 0 ? 'Richard' : 'Louise';
}