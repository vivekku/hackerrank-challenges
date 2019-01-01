function main() {
    const nD_latD_long = readLine().split(' ');

    const n = parseInt(nD_latD_long[0], 10);

    const d_lat = parseInt(nD_latD_long[1], 10);

    const d_long = parseInt(nD_latD_long[2], 10);
    var latitudeLongitude = [], score = 0, p;
    for (var i = 0; i < n; i++) {
        latitudeLongitude[i] = readLine().split(' ');
        for (var j = 0; j < latitudeLongitude[i].length; j++) { 
            latitudeLongitude[i][j] = parseInt(latitudeLongitude[i][j]);
        }
        score += latitudeLongitude[i][3];
    }
    /*for (i = 0; i < n; i++) {
        p = latitudeLongitude[i][3];
        for (var j = 0; j < n; j++) {
            if (i != j && Math.abs(latitudeLongitude[i][0] - latitudeLongitude[j][0]) <= d_lat && Math.abs(latitudeLongitude[i][1] - latitudeLongitude[j][1]) <= d_long) {
                p += latitudeLongitude[j][3];
            }
        }
        if (p > score) {
            score = p;
        }
    }*/
    console.log(score);
}