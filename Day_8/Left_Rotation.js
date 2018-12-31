function main() {
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    var d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    d %= n;
    var str = "";
    for (var i = 0; i < n; i++){
        if ((i + d) >= n) {
            str += a[i + d - n] + " ";          
        } else {
            str += a[i + d] + " ";
        }
    }
    console.log(str);
}