function subMaxSum(xlr, l, r) {
    return xlr.slice(l, r + 1).reduce((acc, e, i) => {
        acc += e.x * Math.min(e.l, i + 1) * Math.min(e.r, r - l - i + 1);
        return acc;
    }, 0);
}

function getXlr(a) {
    return a.map((e, i) => {
        let l = 1;
        for(let j = i - 1; j >= 0 && a[j] < a[i]; j--, l++);
        let r = 1;
        for(let j = i + 1; j < a.length && a[j] < a[i]; j++, r++);
        return {x: a[i], l, r};
    });
}

function getXlr2(a) {
    const n = a.length;
    const xlr = a.map(() => ({}));
    for(let i = 0; i < n; i++) {
        xlr[i].x = a[i];
        if(!xlr[i].l) {
            xlr[i].l = i + 1;
        }
        for(let j = 0; j + i < n; j++) {
            if(i + j + 1 < n && a[i] > a[i + j + 1]) {
                xlr[i + j + 1].l = j + 1;
            } else {
                xlr[i].r = j + 1;
                break;
            }
        }
    }
    return xlr;
}

const stoi = s => parseInt(s, 10);

function processData(input) {
    const lines = input.split('\n');
    const [n, m] = lines[0].split(' ');
    const a = lines[1].split(' ').map(stoi);
    const xlr = getXlr2(a);
    lines.slice(2).forEach((line) => {
        const [l, r] = line.split(' ').map(stoi);
        console.log(subMaxSum(xlr, l - 1, r - 1));
    });
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
