function utopianTree(n) {
    var height = 1;
    for (var i = 1; i <= n; i++){
        if (i % 2 == 0) {
            height += 1;
        } else {
            height *= 2;
        }
    }
    return height;
}