function repeatedString(s, n) {
    var div = Math.trunc(n / s.length), rem = n % s.length;
    var string = s.split(''), count = 0;
    for (var i = 0; i < s.length; i++){
        if (string[i] == 'a'){
            count++;
        }
    }
    count *= div;
    for (var i = 0; i < rem; i++) {
        if (string[i] == 'a') {
            count++;
        }
    }
    return count;
}