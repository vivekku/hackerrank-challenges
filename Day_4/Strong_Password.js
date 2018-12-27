function minimumNumber(n, password) {
    var add = 0;
    var numexp = new RegExp(/\d/m);
    var lowerexp = new RegExp(/[a-z]/m);
    var upperexp = new RegExp(/[A-Z]/m);
    var specialexp = new RegExp(/!|@|#|\$|%|\^|&|\*|\(|\)|-|\+/m);
    if (!numexp.test(password)) {
        add++;
    }
    if (!lowerexp.test(password)) {
        add++;
    }
    if (!upperexp.test(password)) {
        add++;
    }
    if (!specialexp.test(password)) {
        add++;
    }
    return Math.max(add, 6 - n);
}