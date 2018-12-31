function matchingStrings(strings, queries) {
    var count = new Array(queries.length).fill(0);
    for (var i = 0; i < queries.length; i++){
        for (var j = 0; j < strings.length; j++){
            if (queries[i] == strings[j]) {
                count[i]++;
            }
        }
    }
    return count;
}