function camelcase(s) {
    var count = 1;
    for (var i = 1; i < s.length; i++){
        if (s[i] == s[i].toUpperCase()) {
            count++;
        }
    }
    return count;
}