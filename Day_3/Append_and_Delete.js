function appendAndDelete(s, t, k) {
    var wordCount = 0;
    for (var i = 0; i < Math.min(s.length, t.length); i++){
        if (s[i] == t[i]) {
            wordCount++;
        } else {
            break;
        }
    }
    if ((s.length + t.length - 2 * wordCount) > k) {
        return "No";
    } else if ((s.length + t.length - 2 * wordCount) % 2 == k % 2) {
        return "Yes";
    } else if ((s.length + t.length - k) < 0) {
        return "Yes";
    } else {
        return "No";
    }
}