function nonDivisibleSubset(k, S) {
    var subSet = new Array(k).fill(0);
    for (var i = 0; i < S.length; i++){
        subSet[S[i] % k]++;
    }
    if (k % 2 == 0) {
        subSet[Math.trunc(k / 2)] = Math.min(subSet[Math.trunc(k / 2)], 1);
    }

    var count = Math.min(subSet[0], 1);
    for (var i = 1; i <= Math.trunc(k / 2); i++){
        count += Math.max(subSet[i], subSet[k - i]);
    }
    return count;
}