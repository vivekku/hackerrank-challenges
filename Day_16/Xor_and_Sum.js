function xorAndSum(a, b) {
    var len = b.length + 314159;
    var leadingA = len - a.length;
    var leadingB = len - b.length;
    var res = 0;
    var base = 1;
    var onesInRange = 0;
    var mod = 1000000007;
    for (var i = len - 1; i >= 0; i--) {
        var digitA;
        if (i >= leadingA) {
            var indexA = i - leadingA;
            digitA = Number(a.charAt(indexA));
        } else {
            digitA = 0;
        }
        var digitB;
        if (i >= leadingB) {
            var indexB = i - leadingB;
            digitB = Number(b.charAt(indexB));
        } else {
            digitB = 0;
        }

        var digitB2;

        if (i + 314160 < len) {
            digitB2 = b.charAt(i + 314160 - leadingB);
        } else {
            digitB2 = 0;
        }

        if (digitB == 1) {
            onesInRange++;
            onesInRange = onesInRange % mod;
        }
        if (digitB2 == 1) {
            onesInRange--;
            onesInRange = (onesInRange + mod) % mod;
        }

        if (digitA == 0) {
            res = (res + (onesInRange * base) % mod) % mod;
        } else {
            res = (res + ((314160 - onesInRange) * base) % mod) % mod;
        }

        base = (2 * base) % mod;
    }
    return res;
}