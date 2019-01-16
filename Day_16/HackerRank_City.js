function hackerrankCity(A) {
    var nodes = 6, total = A[0] * 29, diagonal = 3 * A[0], d = 8 * A[0] + 3 * A[0];
    for (var i = 1; i < A.length; i++) {
        var k = A[i];
        total = (((2 * nodes * ((8 * k * nodes + 6 * d) % (1000000007))) % (1000000007)) + 4 * (3 * k * nodes + 2 * d) + k + 4 * total) % (1000000007);
        d = (((3 * diagonal * nodes) % (1000000007)) + 8 * k * nodes + 2 * diagonal + 3 * k + 4 * d) % (1000000007);
        nodes = (4 * nodes + 2) % (1000000007);
        diagonal = (2 * diagonal + 3 * k) % (1000000007);
    }
    return total;
}