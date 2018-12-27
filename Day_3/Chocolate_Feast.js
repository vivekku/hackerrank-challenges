function chocolateFeast(n, c, m) {
    var chocNos = Math.trunc(n / c);
    if (chocNos < m) {
        return chocNos;
    } else if (chocNos == m) {
        return chocNos + 1;
    } else {
        var rem = chocNos % m;
        var temp = Math.trunc(chocNos / m);
        chocNos += temp;
        temp += rem;
        while (temp >= m) {
            rem = temp % m;
            temp = Math.trunc(temp / m);
            chocNos += temp;
            temp += rem;
        }
    }
    return chocNos;
}