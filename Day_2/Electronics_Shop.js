function getMoneySpent(keyboards, drives, b) {
    var sum = 0;
    if (Math.min(...keyboards) + Math.min(...drives) > b) {
        return -1;
    }
    for (var i = 0; i < keyboards.length; i++){
        for (var j = 0; j < drives.length; j++){
            if (keyboards[i] + drives[j] <= b && keyboards[i] + drives[j] > sum) {
                sum = keyboards[i] + drives[j];
            }
        }
    }
    return sum;
}