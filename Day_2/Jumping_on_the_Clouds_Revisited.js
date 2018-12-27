function jumpingOnClouds(c, k) {
    var e = 100;
    for (var i = 0; i < c.length; i += k){
        if (e == 0) {
            return 0;
        } else {
            if (c[i] == 0) {
                e --;
            } else {
                e -= 3;
            }
        }
    }
    return e;
}