function superDigit(n, k) {
    if (n < 10) {
        return n;
    }
    return superDigit(n.toString().split('').reduce((sum, num) => sum + (num | 0), 0) * k, 1);
}