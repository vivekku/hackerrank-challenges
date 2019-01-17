function longestCommonSubsequence(a, b) {
    let key1, key2, result = "", count = { "count": 0, "str": [] };
    let c = [], min, max;
    if (a.length > b.length) {
        max = a;
        min = b;
    }
    else {
        max = b;
        min = a;
    }
    for (key1 = -1; key1 < max.length; key1++) {
        c[1] = [];
        for (key2 = -1; key2 < min.length; key2++) {
            c[1][key2] = { "count": 0, "str": [] };
            if (key2 != -1 && key1 != -1) {
                if (a[key1] == b[key2]) {
                    c[1][key2].count = c[0][key2 - 1].count + 1;
                    c[1][key2].str = (c[0][key2 - 1].str) +" "+ a[key1];
                    if (count.count < c[1][key2].count) {
                        count = c[1][key2];
                    }
                }
                else
                    c[1][key2] = c[0][key2].count > c[1][key2 - 1].count ? c[0][key2] : c[1][key2 - 1];
            }
        }
        c[0] = c[1];
    }
    return count.str.split(" ");
}