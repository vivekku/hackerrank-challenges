function matrixRotation(matrix, r) {
    var subMatrix = Math.floor(Math.min(matrix.length, matrix[0].length) / 2);
    var starti = 0, startj = 0;
    var endi = matrix.length - 1, endj = matrix[0].length - 1;
    var newArr = [];
    for (var sbm = 0; sbm < subMatrix; ++sbm) {
        newArr[sbm] = [];
        var i = starti;
        var j = startj;
        while (i != endi) {
            (newArr[sbm]).push(matrix[i++][j]);
        }
        while (j != endj) {
            (newArr[sbm]).push(matrix[i][j++]);
        }
        while (i != starti) {
            (newArr[sbm]).push(matrix[i--][j]);
        }
        while (j != startj) {
            (newArr[sbm]).push(matrix[i][j--]);
        }
        starti++;
        startj++;
        endi--;
        endj--;
    }
    var rot, x, y;
    for (var sbm = 0; sbm < subMatrix; ++sbm) {
        rot = r % newArr[sbm].length;
        while (rot != 0) {
            var t = newArr[sbm].pop();
            newArr[sbm].unshift(t);
            rot--;
        }
    }
    starti = 0, startj = 0;
    endi = matrix.length - 1, endj = matrix[0].length - 1;
    for (var sbm = 0; sbm < subMatrix; ++sbm) {
        var i = starti;
        var j = startj;
        var count = 0;
        while (i != endi) {
            matrix[i++][j] = newArr[sbm][count++];
        }
        while (j != endj) {
            matrix[i][j++] = newArr[sbm][count++];
        }
        while (i != starti) {
            matrix[i--][j] = newArr[sbm][count++];
        }
        while (j != startj) {
            matrix[i][j--] = newArr[sbm][count++];
        }
        starti++;
        startj++;
        endi--;
        endj--;
    }
    var str;
    for (var i = 0; i < matrix.length; i++) {
        str = "";
        for (var j = 0; j < matrix[0].length; j++) {
            str += matrix[i][j] + " ";
        }
        console.log(str);
    }
}