function palindromeIndex(s) {
    
    let len = s.length;
    for(let i=0; i<=Math.floor(len/2); i++) {
        if(s[i] != s[len-1-i]) {
            if((s[i+1] == s[len-1-i]) && (s[i+2]==s[len-1-i-1])) {
                return i;
            } else if((s[i]==s[len-1-i-1]) && (s[i+1] == s[len-1-i-2])) {
                return len-1-i;
            }
        }
    }
    return -1;

}