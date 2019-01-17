function anotherMinimaxProblem(a) {
    var max, highBit,
        lo = [], 
        hi = [];
    do {
        max = Math.max(...a);
        if (max == 0) return 0;
        highBit = 1 << ~~Math.log2(max);
        lo = a.filter(v => v < highBit );
        hi = a.filter(v => v >= highBit);
        if (lo.length == 0) 
            for (var i = 0; i < a.length; i++) 
                if (a[i] > 0)
                    a[i] -= highBit;
    } while (lo.length == 0);    
    var min = 1/0;
    for (var i = 0; i < hi.length; i++)
        for (var j = 0; j < lo.length; j++) {
            if (min > (hi[i] ^ lo[j]))
                min = hi[i] ^ lo[j];
        }
    return min;
}