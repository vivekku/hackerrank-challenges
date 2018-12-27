function fairRations(B) {
    var loafsCount = 0;
    var sum = B.reduce((a, b) => a + b, 0);
    if (sum % 2 != 0) {
        return "NO";
    } else {
        for (var i = 0; i < B.length - 1; i++){
            if (B[i] % 2 != 0) {
                B[i]++;
                B[i + 1]++;
                loafsCount += 2;
            }
        }
    }
    return loafsCount;
}