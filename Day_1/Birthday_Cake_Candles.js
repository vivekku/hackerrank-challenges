function birthdayCakeCandles(ar) {
    var max = Math.max(...ar);
    var count = 0;
    for (var i = 0; i < ar.length; i++){
        if (ar[i] == max)
            count++;
    }
    return count;
}