function howManyGames(p, d, m, s) {
    var k = 0, count = 0;
    while (s > 0) {
        if (p - k * d >= m) {
            s -= (p - k * d);
        } else {
            s -= m;
        }
        count++;
        k++;
    }
    if (s < 0) {
        count--;
    }
    return count;
}