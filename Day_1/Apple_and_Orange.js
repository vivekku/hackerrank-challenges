function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var count_apples = 0, count_oranges = 0;
    for (var i = 0; i < apples.length; i++){
        apples[i] += a;
        if (apples[i] <= t && apples[i] >= s) {
            count_apples++;
        }
    }
    for(var i = 0; i < oranges.length; i++) {
        oranges[i] += b;
        if (oranges[i] <= t && oranges[i] >= s) {
            count_oranges++;
        }
    }
    console.log(count_apples);
    console.log(count_oranges);
}