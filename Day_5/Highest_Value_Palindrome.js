function highestValuePalindrome(s, n, k) {
    var chars = s.split('');
    var i=0;
    var n=chars.length;

    var neededOps = 0;
    while(i < n/2){
        if(chars[i] != chars[n-1-i]) neededOps++;
        i++;
    }
    i=0;

    var bonus = k - neededOps;
    if(bonus >= 0){
        var max;
        while(i < n/2){
            max = Math.max(chars[n-1-i], chars[i])

            if(chars[i] != chars[n-1-i]){
                if(max < '9' && bonus > 0) {
                    max = '9';
                    bonus--;
                }
            } else if(max < '9' && bonus > 1){
                max = '9';
                bonus-=2;
            } else if(2*i == n-1 && bonus == 1){
                max = '9';
                bonus--;
            }

            chars[n-1-i] = max;
            chars[i] = max;
            i++;
        }
        return chars.join('')
    }

    return -1;
}