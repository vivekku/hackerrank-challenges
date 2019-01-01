function twoStacks(x, a, b) {
    var apos = -1;
    var bpos = -1;
    var sum = 0;
    while(sum + b[bpos+1] <= x)
        sum += b[++bpos];
    var best = apos+bpos;
    while (bpos > -2) {
        if (sum + a[apos+1] <= x) {
            sum += a[++apos];
            best = Math.max(best, apos+bpos);
        } else
            sum -= b[bpos--];
    }
    return Math.max(best, apos+bpos)+2;
}