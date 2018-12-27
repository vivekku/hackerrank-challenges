function pageCount(n, p) {
    var count;
    if (p <= n / 2) {
        if (p == 1){
            count = 0;
        } else {
            count = Math.trunc(p / 2);
        }
    } else {
        if (n % 2 == 0) {
            if (p == n) {
                count = 0;
            } else {
                if (p == n - 1) {
                    count = 1;
                } else{
                    count = Math.trunc((n - p) / 2);
                }
            }
        } else {
            if (p == n || p == n - 1) {
                count = 0;
            } else{
                count = Math.trunc((n - p) / 2);
            }
        }
    }
    return count;
}