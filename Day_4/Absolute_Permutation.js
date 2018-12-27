function absolutePermutation(n, k) {
    var absPermutation = [];
    if (k == 0) {
        for (var i = 1; i <= n; i++) {
            absPermutation.push(i);
        }
    } else if ((n % (2 * k)) == 0) {
        for (var i = 1; i <= n; i++) {
            absPermutation.push(i + k);
            if (i % k == 0) {
                k = 0 - k;
            }
        }
    } else {
        absPermutation.push(-1);
    }
    return absPermutation;
}