function happyLadybugs(b) {
    var status = "YES";
    var f = new Array(96).fill(0);
    for (var i = 0; i < b.length; i++){
        f[b.charCodeAt(i)]++;
    }
    for (var i = 1; i < b.length - 1; i++) {
        if (b[i] != b[i + 1] && b[i] != b[i - 1] && f[95] < 1) {
            status = "NO";
        }
    }
    for (var i = 65; i <= 90; i++) {
        if (b.indexOf(String.fromCodePoint(i)) != -1 && f[i] < 2) {
            status = "NO";
        }
    }
    return status;
}