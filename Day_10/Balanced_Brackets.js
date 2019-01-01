function isBalanced(s) {
    var result = 'YES';
    var stack = [];
    s.split('').forEach(function(val) {
        switch(val) {
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            case '(':
                stack.push(')');
                break;
            default:
                var test = stack.pop();
                if (val !== test) {
                    result = 'NO';
                }    
        }
    })
    if (stack.length) {
        result = 'NO';
    }
    return result;
}
