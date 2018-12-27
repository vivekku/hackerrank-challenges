function superReducedString(s) {
    s = s.split('');
    for (var i = 0; i < s.length; i++){
        if (s[i] == s[i + 1]) {
            s.splice(i, 2);
            i = -1;
        }
    }
    if (s.length == 0) {
        return "Empty String";
    } else {
        return s.join('');
    }
}