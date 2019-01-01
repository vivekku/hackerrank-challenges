function sortedSubsegments(k, a, queries) {
    var arr = a, start = queries[0][0], end = queries[0][1];
    var left = arr.slice(0, start);
    var sort = arr.slice(start, end + 1).sort((a, b) => a - b);
    var right = arr.slice(end + 1);
    arr = left.concat(...sort, ...right);
	
    if (queries.length > 1) {
        start = Infinity, end = -Infinity;
        for (var i = 1; i < queries.length; i++) {
            start = Math.min(start, queries[i][0]);
            end = Math.max(end, queries[i][1]);
        }
        var left = arr.slice(0, start);
        var sort = arr.slice(start, end + 1).sort((a, b) => a - b);
        var right = arr.slice(end + 1);
        arr = left.concat(...sort, ...right);        
    }
	
    return arr[k];
}