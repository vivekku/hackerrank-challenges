function ashtonString(s, k) {
     const set = new Set();
     var index = k; 
        for (let x = 0; x < s.length; x++) {
            for (let y = 1; y <= s.length - x; y++) {
                set.add(s.substr(x, y));
            }
        }
        
        const arr = Array.from(set)
        arr.sort();
        // console.log(arr.join(''));
        // console.log(arr.join('')[index-1]);
         return arr.join('')[index-1];
 }