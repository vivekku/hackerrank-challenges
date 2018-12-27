function divisibleSumPairs(n, k, ar) {
    var count = 0;
    for (var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            if (i != j && i < j) {
                if ((ar[i] + ar[j]) % k == 0) {
                    count++;
                }
            }
        }
    }
    return count;
}