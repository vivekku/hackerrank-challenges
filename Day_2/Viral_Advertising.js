function viralAdvertising(n) {
    var people = 0, shared = 5;
    for (var i = 1; i <= n; i++){
        shared = Math.floor(shared / 2);
        people += shared;
        shared *= 3;
    }
    return people;
}