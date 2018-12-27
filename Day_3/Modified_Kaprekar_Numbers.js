function kaprekarNumbers(p, q) {
    var kNo = "", sq, n, ls, rs;
    for (var i = p; i <= q; i++){
        if (i == 1) {
            kNo = kNo + i + " ";
            continue;
        }
        ls = 0, rs = 0, sq = i * i;
        n = sq.toString().split('');
        for (var j = 0; j < n.length; j++){
            if (j <= (Math.trunc(n.length / 2) - 1)) {
                ls *= 10;
                ls += parseInt(n[j]);
            } else {
                rs *= 10;
                rs += parseInt(n[j]);
            }
        }
        if ((ls + rs) == i) {
            kNo = kNo + i + " ";
        }
    }
    if (kNo.length < 1) {
        console.log("INVALID RANGE");
    } else {
        console.log(kNo);        
    }
}