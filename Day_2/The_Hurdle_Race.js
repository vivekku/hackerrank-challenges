function hurdleRace(k, height) {
    var max_height = Math.max(...height);
    if (k < max_height) {
        return max_height - k;
    } else {
        return 0;
    }
}