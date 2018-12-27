function taumBday(b, w, bc, wc, z) {
    
    function multiply(n1, n2) {
        var d1 = n1 + '';
        var d2 = n2 + '';
        var carry = 0;
        var num = [];
        for (var i = d1.length - 1; i >= 0; i--) {
            var d3 = (parseInt(d2, 10) * parseInt(d1[i], 10)) + carry;
            carry = 0;
            d3 += '';
            if (d3.length > 1 && i != 0) {
                carry = parseInt(d3.slice(0, -1), 10);
                num.push(d3.slice(-1));
            } else {
                num.push(d3);
            }
        }
        return num.reverse().join('');
    }

    function add(n1, n2) {
        var d1 = n1 + '';
        var d2 = n2 + '';
        var carry = 0;
        var num = [], d3;
        for (var i = d1.length - 1, j = d2.length - 1; Math.max(i, j) >= 0; i-- , j--) {
            if (i < 0) {
                d3 = parseInt(d2[j], 10) + carry;
            } else if (j < 0) {
                d3 = parseInt(d1[i], 10) + carry;
            } else {
                d3 = (parseInt(d1[i], 10) + parseInt(d2[j], 10)) + carry;
            }
            carry = 0; d3 += '';
            if (d3.length > 1 && Math.max(i, j) != 0) {
                carry = parseInt(d3.slice(0, -1), 10);
                num.push(d3.slice(-1));
            } else {
                num.push(d3);
            }
        }
        return num.reverse().join('');
    }
        
    var result;
    if (bc > add(wc, z)) {
        result = add(multiply(b, add(wc, z)), multiply(w, wc));
    } else if (wc > add(bc, z)) {
        result = add(multiply(b, bc), multiply(w, add(bc, z)));
    } else {
        result = add(multiply(b, bc), multiply(w, wc));
    }
    if (result == 0) {
        return 0;
    } else {
        return result;
    }
}