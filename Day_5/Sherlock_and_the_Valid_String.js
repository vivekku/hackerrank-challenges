function isValid(s) {
    const commaSeparated = /\w/g;
    const result = s.match(commaSeparated);
    
    
    var count = {};
    result.forEach(function(i) {count[i] = (count[i] || 0) + 1});
    var values = Object.values(count);
    var uniqueValues = values.filter(function(obj){return values.indexOf(obj)});
    const allEqual = values.every( (val, i, arr) => val === arr[0] );
    
    if (allEqual === true || uniqueValues.length === 1){
        return "YES";
    } else {
        return "NO";
    }
}