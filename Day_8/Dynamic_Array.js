function dynamicArray(n, queries) {
    var lastAnswer = [];
    var arr = [], index = 0, x, y;
    for (var i = 0; i < n; i++){
        arr[i] = [];
    }
    for (i = 0; i < queries.length; i++){
        x = queries[i][1], y = queries[i][2];
        if (queries[i][0] == 1) {
            arr[(x ^ index) % n].push(y);
        } else if (queries[i][0] == 2) {
            index = arr[(x ^ index) % n][y % (arr[(x ^ index) % n]).length];
            lastAnswer.push(index);
        } 
    }
    return lastAnswer;
}