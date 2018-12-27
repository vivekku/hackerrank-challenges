function birthday(s, d, m) {
    var choc_bar = new Array(m);
    var ways_count = 0;

    if (s.length < m) {
        return ways_count;
    }
    var tries = 0;
    for (var i = 0; i < s.length; i++){
        if (m == (i+1)) {
            tries = s.length-i;
        }
    }

    var temp = 0;
    while (temp <= tries) {
        var k = temp;
        for (var j = 0; j < choc_bar.length; j++){
            choc_bar[j] = s[k++];
        }
        if (choc_bar.reduce((a, b) => a + b, 0) == d) {
            ways_count++;
        }
        temp++;
    }
    return ways_count;
}