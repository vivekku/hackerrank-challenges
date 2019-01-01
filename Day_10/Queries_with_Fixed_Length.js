function solve(arr, queries) {

        var results = [];
    for (var i = 0; i < queries.length; i++) {

        var query = queries[i];

        var min = -1;
        var queryMax = 0;
        var queryMaxIdx = 0;
        for (var j = 0, len = arr.length-query; j <= len; j++) {

            if (queryMaxIdx <= j) {
                queryMax = 0;
                queryMaxIdx = j;
                for (var k=j; k < j+query; k++) {

                    var kvalue = arr[k];
                    if (kvalue > queryMax) {

                        queryMax = kvalue;
                        queryMaxIdx = k;
                    }
                }
            }
            else {
                var kIdx = j+query-1;
                var kvalue = arr[kIdx];
                if (kvalue > queryMax) {

                    queryMax = kvalue;
                    queryMaxIdx = kIdx;
                }

            }

            if (min < 0) {
                min = queryMax;
            }
            else {
                min = min < queryMax ? min : queryMax;
            }
        }

        results.push(min);
    }

    return results;
}