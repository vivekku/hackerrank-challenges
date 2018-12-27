function almostSorted(arr, n) {
    var a = arr.slice();
    arr.sort(function (a, b) { return a - b; });
    var t = [];
    for (var i = 0; i < n; i++) {
        if (arr[i] != a[i]) {
            t.push(i);
        }
    }
    if (t.length == 2) {
        console.log("yes");
        console.log("swap " + (t[0] + 1) + " " + (t[1] + 1));
    } else if (t.length == 0) {
        console.log("yes");
    } else {
        var l = t[0], r = t[t.length - 1];
        while (l < r) {
            var temp = a[l];
            a[l] = a[r];
            a[r] = temp;
            l++;
            r--;
        }
    }
    var h = [];
    for (var i = 0; i < n; i++){
        if (arr[i] != a[i]) {
            h.push(i);
        }
    }
    if (h.length == 0) {
        console.log("yes");
        console.log("reverse " + (t[0] + 1) + " " + (t[t.length - 1] + 1));        
    } else if (h.length > 0 && t.length > 2) {
        console.log("no");
    }
}