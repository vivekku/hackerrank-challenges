function stringDiffThreshold(s1, s2, max = 0, score = 0) {
   
    var len = s1.length;

    if (s1 !== s2 && len > 1) {
       
        var len2 = Math.ceil(len / 2);

        score = stringDiffThreshold(s1.substr(0, len2), s2.substr(0, len2), max, score);
        if (score > max) return score;
        score = stringDiffThreshold(s1.substr(len2), s2.substr(len2), max, score);
        if (score > max) return score;

    } else if (s1 !== s2 && len === 1) {
        //console.log(len + '/:' + s1 + '!==' + s2);
        return score + 1;
    } else {
        //console.log(len + '/:' + s1 + '===' + s2);
    }

    return score;
}

function virusIndices(p, v) {
    var out = [];
    for (var i = 0; i < p.length - v.length+1; i++) {
        if (stringDiffThreshold(p.substr(i, v.length), v, 1) < 2)
            out.push(i);
    }
    if (out.length > 0)
        console.log(out.join(' '));
    else
        console.log('No Match!');
}

