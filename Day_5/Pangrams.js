function pangrams(s) {
    s = s.toLowerCase();
    var f = new Array(123).fill(0);
    for (var i = 0; i < s.length; i++) {
        f[s.charCodeAt(i)]++;
    }
    for (var i = 97; i < 123; i++) {
        if (f[i] == 0) {
            return "not pangram";
        }
    }
    return "pangram";
}