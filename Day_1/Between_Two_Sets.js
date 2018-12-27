function getTotalX(a, b) {
    var foundFlag = 0;
    var found = 0;
    var num = [];
    for (var i = a[a.length - 1]; i <= b[0]; i++) {
        for (var j = 0; j < a.length; j++){
            if (i % a[j] != 0) {
                foundFlag = 1;
                break;
            }
        }
        if (foundFlag == 0) {
            num[found++] = i;
        }
        foundFlag = 0;
    }
    found = 0;
    for (var i = 0; i < num.length; i++) {
        foundFlag = 0;
        for (var j = 0; j < b.length; j++) {
            if (b[j] % num[i] != 0) {
                foundFlag=1;
                break;
            }
        }
        if (foundFlag == 0) {
            found++;
        }
    }
    return found;
}