function jumpingOnClouds(c) {
    var jumps = 0;
    for (var i = 0; i < c.length - 1; i++){
        if (c[i + 2] != 1) {
            i++;
        }
        jumps++;
    }
    return jumps;
}