function andProduct(a, b) {
    if (a == b) {
        return a;
    }
    for (var i = a + 1; i < b; i++) {
        a = (a & i) >>> 0;
    }
    return (a & b) >>> 0;
}