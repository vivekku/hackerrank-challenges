function separateNumbers(s) {
const BigNumber = require('bignumber.js');
let valid = false, firstx= -1;
    let sLen = BigNumber(s.length);
    let i = BigNumber(1);
    for(i; i.lte(sLen.div(2)); i = i.plus(1)){
        let x = BigNumber(s.slice(0,i));
        firstx = x;
        
        let test = x.toString();
        while(test.length < s.length){
            test += (x = (x.plus(1))).toString();
        };

        if(test === s){
            valid = true;
            break;
        };
    };
    
let ans = valid ? 'YES '+firstx : 'NO';
console.log(ans);
}