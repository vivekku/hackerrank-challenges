function lcp(a, b) {
    let minLength = Math.min(a.length, b.length);

    for (let i = 0; i < minLength; i++) {
        if (a[i] !== b[i]) {
            return i;
        }
    }
    
    return minLength;
}

/*
 * Complete the findStrings function below.
 */
function findStrings(w, queries) {
    let suffixes = new Set();
    
    for (let str of w) {
        for (let i = 0; i < str.length; i++) {
            suffixes.add(str.substr(i, str.length - i));
        }
    }
    
    let sortedSuffixes = Array.from(suffixes).sort((a, b) => a > b ? 1 : -1);
    let lcps = [0];
    
    for (let i = 1; i < sortedSuffixes.length; i++) {
        lcps.push(lcp(sortedSuffixes[i], sortedSuffixes[i - 1]));
    }
    
    return queries.map(q => {
        for (let i = 0; i < sortedSuffixes.length; i++) {
            let suffix = sortedSuffixes[i];
            let lcp = lcps[i];
            
            if (q > suffix.length - lcp) {
                q -= suffix.length - lcp;
            } else {
                return suffix.substr(0, q + lcp);
            }
        }
        
        return 'INVALID';
    });
}