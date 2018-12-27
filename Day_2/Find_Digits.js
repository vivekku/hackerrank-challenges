function findDigits(n) {
    var count = 0, temp = n;
    while (temp > 0) {
        if (n % (temp % 10) == 0) {
            count++;
        }
        temp = Math.trunc(temp / 10);
    }
    return count;
}