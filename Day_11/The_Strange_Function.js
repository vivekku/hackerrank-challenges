var gcd = function(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};

function maximumValue(a) {
    var result = Number.NEGATIVE_INFINITY;
    for(var i = 0 ; i < a.length; i++){
        var sum = 0;
        var max = a[i];
        var gcdTemp = Math.abs(a[i]);
        for(var j = i; j < a.length; j++){
            sum += a[j];
            max = Math.max(max,a[j]);
            gcdTemp = gcd(gcdTemp,Math.abs(a[j]));
            var temp = gcdTemp*(sum-max);
            if(temp > result) {result = temp;}
        }
    }
    return result;
}