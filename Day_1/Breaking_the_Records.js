function breakingRecords(scores) {
    var record = [0, 0], min = scores[0], max = scores[0];
    for (var i = 1; i < scores.length; i++){
        if (max < scores[i]) {
            record[0]++;
            max = scores[i];
        }
        if (min > scores[i]) {
            record[1]++;
            min = scores[i];
        }
    }
    return record;
}