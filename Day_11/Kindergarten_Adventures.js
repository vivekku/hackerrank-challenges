function solve(t) {  
	var c = new Array(Math.max(...t)+1).fill(0);
    
    for (var i = 0; i < t.length; i++) {
        if (t[i] < t.length) {
            c[(i + 1) % t.length]++;
            c[(i - t[i] + 1 + t.length) % t.length]--;
        }
    }
    var pos, max = -1, curr = 0;
    for (var i = 0; i < t.length; i++) {
        curr += c[i];
        if (curr > max) {
            pos = i;
            max = curr;
        }
    }    
    return (pos + 1);
}