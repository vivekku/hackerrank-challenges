function squares(a, b) {
    var countSquares = 0;
    var temp = Math.ceil(Math.sqrt(a));
    while (Math.pow(temp, 2) <= b) {
        countSquares++;
        temp++;
    }
    return countSquares;
}