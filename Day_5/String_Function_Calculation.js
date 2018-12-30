function maxValue(t) {
    var maxVal = 0;
    for (var i=1; i<=t.length; i++){
        var s = t.substring(0,i);
        maxVal = Math.max(maxVal, s.length*stringOccur(s, t));
    }
    return maxVal;
}

function stringOccur(s, t) {
    var occurance = 0;
    while(t.indexOf(s) > -1) {
        occurance++;
        t = t.substring(t.indexOf(s) + 1);
    }
    return occurance;
}