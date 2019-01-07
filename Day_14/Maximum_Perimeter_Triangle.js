function maximumPerimeterTriangle(sticks) {
    sticks.sort((a, b) => a - b);
    var i = sticks.length - 3;
    while (i >= 0 && (sticks[i] + sticks[i + 1] <= sticks[i + 2])) {
        i -= 1;
    }
    var res = [];
    if (i >= 0) {
        res.push(sticks[i]), res.push(sticks[i + 1]), res.push(sticks[i + 2]);
    } else {
        res.push(-1);
    }
    return res;
}