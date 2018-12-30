function hackerrankInString(s) {
    var index = 0;
    var string = "hackerrank";
    for (var i = 0; i < s.length; i++){
        if (s.charAt(i) == string.charAt(index)) {
            index++;
        }
    }

    if (index == string.length) {
        return "YES";
    } else {
        return "NO";
    }
}