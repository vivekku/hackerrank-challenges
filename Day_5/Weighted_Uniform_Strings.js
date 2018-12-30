function weightedUniformStrings(s, queries) {
    var code;
    var prevChar;
    var prevCharCount;
    var dic = [];
    for (var i = 0; i < s.length; i++) {
        code = s.charCodeAt(i) - 96;
        if (prevChar === code) {
            prevCharCount++;
        } else {
            prevCharCount = 1;
            prevChar = code;
        }
        
        dic[code * prevCharCount] = true;
    }
    
    var result = [];
    for (var i = 0; i < queries.length; i++) {
        result.push(dic[queries[i]] ? "Yes" : "No");
    }
    
    return result;
}