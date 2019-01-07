function luckBalance(k, contests) {
    var important = [], luck = 0;
    for (var i = 0; i < contests.length; i++){
        if (contests[i][1] == 1) {
            important.push(contests[i][0]);
        } else {
            luck += contests[i][0];
        }
    }
    important.sort((a, b) => a - b);
    for (i = important.length - 1; i >= 0; i--){
        if (k > 0) {
            luck += important[i];
            k--;
        } else {
            luck -= important[i];
        }
    }
    return luck;
}