function flatlandSpaceStations(n, c) {
    if (n == c.length) {
        return 0;
    } else {
        var distance = [], i, j, d;
        for (i = 0; i < n; i++) {
            distance[i] = Math.abs(i - c[0]);
            for (j = 1; j < c.length; j++) {
                d = Math.abs(i - c[j]);
                distance[i] = Math.min(distance[i], d);
            }
        }
        return Math.max(...distance);
    }
}