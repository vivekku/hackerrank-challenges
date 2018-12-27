function circularArrayRotation(a, k, queries) {
    var result = [];
    for (var i = 0; i < queries.length; i++) {
        result[i] = a[(queries[i] + a.length - (k % a.length)) % a.length];
    }
    return result;
}