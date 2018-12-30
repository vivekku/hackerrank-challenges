function marsExploration(s) {
    var count = s.length / 3;
    var original = "";
    for (var i = 0; i < count; i++){
        original += "SOS";
    }
    count = 0;
    for (var i = 0; i < s.length; i++){
        if (s.charAt(i) != original.charAt(i)) {
            count++;
        }
    }
    return count;
}