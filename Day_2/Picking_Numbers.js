function pickingNumbers(a) {
    var num = 0;
    var count = new Array(100).fill(0);
    for (var i = 0; i < a.length; i++){
        count[a[i]]++;
    }
    for (var i = 2; i < 100; i++) {
        num = Math.max(num, count[i] + count[i-1]);
    }
    return num;
}