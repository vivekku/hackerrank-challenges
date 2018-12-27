function beautifulTriplets(d, arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr.indexOf(arr[i] + d) != -1 && arr.indexOf(arr[i] + 2 * d) != -1) {
            count++;
        }
    }
    return count;
}