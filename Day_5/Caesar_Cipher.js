function caesarCipher(s, k) {
    var temp = [];
    k %= 26;
    for (var i = 0; i < s.length; i++){
        temp[i] = s.charCodeAt(i);
        if (temp[i] > 64 && temp[i] < 91 || temp[i] > 96 && temp[i] < 123) {
            if (temp[i] + k > 90 && temp[i] < 91) {
                temp[i] = 64 + ((temp[i] + k) % 90);
            } else if (temp[i] + k > 122 && temp[i] < 123) {
                temp[i] = 96 + ((temp[i] + k) % 122);
            } else {
                temp[i] += k;
            }
        }
        temp[i] = String.fromCodePoint(temp[i]);
    }
    s = temp.join('');
    return s;
}