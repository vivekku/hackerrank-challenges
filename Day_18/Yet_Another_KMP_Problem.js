function processData(input) {
    let N = input.split(' ').map((n, i) => ([+n, String.fromCharCode(97+i)])).filter(a => a[0] != 0).sort((a, b) => (a[0] - b[0])*128 + a[1].charCodeAt(0) - b[1].charCodeAt(0));
    let s = '', c = N[0][1], n = N[0][0];
    if (n != 0) {
        s += c;
        n--;
    }
    N = N.slice(1).sort((a, b) => a[1].charCodeAt(0) - b[1].charCodeAt(0));
    let f = N.length > 0 && c.charCodeAt(0) < N[0][1].charCodeAt(0);
    for (let i = 0; i < N.length; i++)
        for (let j = 0; j < N[i][0]; j++) {
            if (n != 0 && c.charCodeAt(0) < N[i][1].charCodeAt(0))
                do {
                    s += c;
                    n--;
                } while (n != 0 && !f);
            s += N[i][1];
        }
    while (n--)
        s += c;
    console.log(s);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
