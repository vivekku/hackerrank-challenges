function strangeCounter(t) {
    var time = 1, value = 3;
    while (t > (time + value - 1)) {
        time += value;
        value *= 2;
    }
    return value - (t - time);
}