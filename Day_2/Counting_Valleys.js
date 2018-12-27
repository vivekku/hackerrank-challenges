function countingValleys(n, s) {
    var valleys = 0, hike = 0, valley_down = 0, valley_up = 0;
    for (var i = 0; i < n; i++){
        if (hike < 0) {
            valley_down = 1;
            valley_up = 0
        } else if (hike > 0) {
            valley_up = 1;
        }
        if (s[i] == 'U') {
            hike++;
        } else if (s[i] == 'D') {
            hike--;
        }
        if (hike == 0 && valley_down == 1 && valley_up == 0) {
            valleys++;
            valley_down == 0;
        }
    }
    return valleys;
}