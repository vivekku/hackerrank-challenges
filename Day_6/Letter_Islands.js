function letterIslands(s, k) {

    let g = 0;
    let worked = [];
    let l = s.length / k;
    for (let i = 0; i < l; i++) {
        let str = '';
        for (let n = i; n < l; n++) {
            str += s[n];
            if (worked.indexOf(str) == -1) {
                worked.push(str);

                if (s.match(new RegExp(`(${str})+`, 'gm')).length == k) {
                    g++;
                }
            }

        }

    }

    return g;
}