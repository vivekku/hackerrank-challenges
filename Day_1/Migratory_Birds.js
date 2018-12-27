function migratoryBirds(arr) {
    var birds = [0, 0, 0, 0, 0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 1) {
            birds[0]++;
        } else if (arr[i] == 2) {
            birds[1]++;
        } else if (arr[i] == 3) {
            birds[2]++;
        } else if (arr[i] == 4) {
            birds[3]++;
        } else if (arr[i] == 5) {
            birds[4]++;
        }
    }
    var max = 0;
    for (var i = 1; i < birds.length; i++){
        if (birds[max] < birds[i]) {
            max = i;
        }
    }
    return ++max;
}