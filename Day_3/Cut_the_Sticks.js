function cutTheSticks(arr) {
    var sticks = [], i = 0, j, min, discarded = 0;
    while (discarded < arr.length) {
        sticks[i++] = arr.length - discarded;
        min = Math.min.apply(null, arr.filter(Boolean));
        for (j = 0; j < arr.length; j++) {
            if (arr[j] == min) {
                arr[j] = 0;
                discarded++;
            } else if (arr[j] == 0) { 
                continue;
            } else {
                arr[j] -= min;
            }
        }
    }
    return sticks;
}