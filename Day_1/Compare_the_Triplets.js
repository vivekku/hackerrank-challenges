function compareTriplets(a, b) {
    var score = [0,0];

    for (var i = 0; i < a.length;i++) {
        if (a[i] > b[i]) {
            score[0]++;
        } else if (a[i] < b[i]) { 
            score[1]++;
        }
    }
    return score;
}