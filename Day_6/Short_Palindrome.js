function shortPalindrome(s) {
    // Complete this function
    let mod = 1000*1000*1000 + 7
    
    let arr1 = [26]
    var arr2 = [];
    let arr3 = [26]
    
    for(var i=0; i<26; i++) {
        arr1[i] = 0
        arr2[i] = new Array(26)
        arr3[i] = 0
        for(var k=0; k<26; k++) {
            arr2[i][k] = 0
        }
    }
    
    
    let ans = 0
    for (var i = 0; i < s.length;i++){
        let index = s.charCodeAt(i) - "a".charCodeAt(0);
        ans += (arr3[index]%mod);
        ans = ans%mod;
        for (var j = 0; j < 26; j++){
            arr3[j] += (arr2[j][index]%mod);
            arr3[j] = arr3[j]%mod;
        }
        for (var j = 0; j < 26;j++){
            arr2[j][index] += (arr1[j]%mod);
             arr2[j][index] =  arr2[j][index]%mod;
        }

        arr1[index]++;
        arr1[index] = arr1[index]%mod;
    }
    return ans
}

function binomial(n, k) {
     if ((typeof n !== 'number') || (typeof k !== 'number')) 
  return false; 
    var coeff = 1;
    for (var x = n-k+1; x <= n; x++) coeff *= x;
    for (x = 1; x <= k; x++) coeff /= x;
    return coeff;
}