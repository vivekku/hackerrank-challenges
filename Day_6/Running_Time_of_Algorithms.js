function runningTime(arr) {
    var shifts = 0;
    for (var i = 1; i < arr.length; i++) {
        var j = i;
        var value = arr[i];
        while (j >= 1 && arr[j-1] > value) {
            arr[j] = arr[j-1];
            j--;
            shifts++;
        }
        arr[j] = value;
    }
    return shifts;
}