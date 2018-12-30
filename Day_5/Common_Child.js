function commonChild(s1, s2) {
    
    var matrix = new Array(s1.length);
    
    for(var i = 0; i < s1.length; i++) {
        matrix[i] = new Array(s1.length);
        for(var j = 0; j < s1.length; j++) {
            var cmp = s1[i] === s2[j];
            var left = j === 0 ? 0 : matrix[i][j-1];
            var down = i === 0 ? 0 : matrix[i-1][j];
            var diag = (i === 0 || j === 0) ? 0 : matrix[i-1][j-1];
            matrix[i][j] = Math.max(left, down, diag + cmp);
        }
    }
    
    return matrix[s1.length-1][s1.length-1];


}