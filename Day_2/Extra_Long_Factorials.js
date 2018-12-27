function extraLongFactorials(n) {
    var fact = n;
    while (n > 1) {
        var d1 = fact + '';
        var d2 = n - 1 + '';
        var carry = 0;
        var factorial = [];
        for (var i = d1.length - 1; i >= 0; i--){
            var d3 = (parseInt(d2, 10) * parseInt(d1[i], 10)) + carry;  
            carry = 0;    
            d3 += '';
            if (d3.length > 1 && i != 0) {
                carry = parseInt(d3.slice(0, -1), 10);
                factorial.push(d3.slice(-1));
            } else {
                factorial.push(d3);
            }
        }
        fact = factorial.reverse().join('');
        n--;
    }
    console.log(fact);
}