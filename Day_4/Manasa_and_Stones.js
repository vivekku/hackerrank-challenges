function stones(n, a, b) {
    var lastStone = [];
    if (a == b) {
        lastStone.push((n - 1) * a);
    } else {
        var min = Math.min(a, b);
        var max = Math.max(a, b);
        var lastStone = [];
        for (var i = 0; i < n; i++) {
            lastStone.push(max * i + min * (n - i - 1));
        }
    }
    return lastStone;
}