function arrayManipulation(n, queries) {
    var arr = new Array(n).fill(0);
    for (var i = 0; i < queries.length; i++){
        arr[queries[i][0] - 1] += queries[i][2];
        if (queries[i][1] < n) {
            arr[queries[i][1]] -= queries[i][2];            
        }
    }
    for (i = 1; i < arr.length; i++){
        arr[i] += arr[i - 1];
    }

    var max = arr[0];
    for (i = 1; i < arr.length; i++){
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}