function substrings(n) {
    let s = n.split('');
    let res = 0;
    let f = 1;
    let l = s.length;
    for (let i = l - 1; i >= 0; i--) {
        res = (res + (s[i] - '0') * f * (i + 1)) % 1000000007;
        f = (f * 10 + 1) % 1000000007;
    }
    return res;
}