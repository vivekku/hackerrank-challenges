function processData(input) {
    const lines = input.split('\n');
    const T = parseInt(lines.shift());
    const f = new Array(1001).fill(0);
    for (let t = 0; t < T; t++) {
        const N = parseInt(lines.shift());
        const shelves = lines.shift().split(' ').map(Number);
        shelves.unshift(0); 
        const Q = parseInt(lines.shift());
        for (let q = 0; q < Q; q++) {
            const query = lines.shift().split(' ').map(Number);
            const type = query.shift();
            const args = query;
            if (type === 1) {
                const [x, k] = args;
                shelves[x] = k;
            } else { 
                const [x, y, k] = args;
                for (let i = x; i <= y; i++) {
                    f[shelves[i]]++;
                }
                let remaining = k;
                for (let c = 1; c < 1001; c++) {
                    remaining -= Math.min(remaining, f[c]);
                    if (remaining === 0) {
                        console.log(c);
                        f.fill(0);
                        break;
                    }
                }
            }
        }
    }
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
