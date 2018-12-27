function biggerIsGreater(w) {
    var i = w.length - 1;
    while (i >= 0 && w.charCodeAt(i - 1) >= w.charCodeAt(i)) {
        i--;
    }
    if (i < 1) {
        return "no answer";
    }
    var j = w.length - 1;
    while (w.charCodeAt(i - 1) >= w.charCodeAt(j)) {
        j--;
    }
    w = w.split('');
    var temp = w[i - 1];
    w[i - 1] = w[j];
    w[j] = temp;
    j = w.length - 1;
    while (i < j) {
        temp = w[i];
        w[i] = w[j];
        w[j] = temp;
        i++;
        j--;
    }
    w = w.join('');
    return w;
}