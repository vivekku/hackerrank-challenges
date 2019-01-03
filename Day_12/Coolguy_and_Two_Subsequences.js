'use strict';

function processData(input) {
    input = input.split('\n').map(line => line.trim());
    const m = Math.pow(10, 9) + 7;
    let n = +input[0],
        arr = input[1].split(' ').map(Number),
        ans = 0;
    let left = new Array(n),
        right = new Array(n);

    for (let i = 0, j; i < n; i += 1) {
        for (j = i - 1; j >= 0 && arr[j] >= arr[i]; j -= 1)
            ;
        left[i] = i - j;
        for (j = i + 1; j < n && arr[j] > arr[i]; j += 1)
            ;
        right[i] = j - i;
 
    }
    let n0, a0, ans0, a1, n1;
    for (let b = 0; b < n - 1; b += 1) {
        for (let i0 = b; i0 >= 0; i0 -= n0) {
            a0 = arr[i0];
            n0 = left[i0];
            ans0 = (a0 * n0) % m;
            for (let i1 = b + 1; i1 < n; i1 += 1) {
                a1 = arr[i1];
                n1 = Math.min(left[i1], i1 - b) * right[i1] % m;
                if (a1 < a0) {
                    ans = (ans + a1 * n1 % m * n0) % m;
                } else {
                    ans = (ans + ans0 * n1 % m) % m;
                }
            }
        }
    }
    console.log(ans);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});
process.stdin.on("end", function () {
   processData(_input);
});
