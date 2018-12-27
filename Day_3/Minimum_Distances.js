function minimumDistances(a) {
    var d = Number.MAX_SAFE_INTEGER;
    for (var i = 0; i < a.length - 1; i++){
        for (var j = i + 1; j < a.length; j++){
            if (a[j] == a[i]) {
                d = Math.min(d, Math.abs(j - i));
            }
        }
    }
    if (d != Number.MAX_SAFE_INTEGER) {
        return d;
    } else {
        return -1;
    }
}