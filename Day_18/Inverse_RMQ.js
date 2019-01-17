function processData(input) {
    let [n, ...A] = input.split(/\s+/g).map(x => parseInt(x));
    let B = [];
    let num, count = 0, i = 0;
    
    A.sort((a, b) => a - b);
    num = A[0];
    n = n + n - 1;

    for (const a of A)
    {
        if (a === num)
            count++
        else
        {
            B.push({num: num, count: count});
            num = a;
            count = 1;
        }
    }
    A.fill(NaN);
    B.push({num: num, count: count});
    B.sort((a, b) => a.count === b.count ? a.num - b.num : b.count - a.count);

    for (const b of B)
    {
        while (!isNaN(A[i]))
            i++;
        for (let c1 = i; b.count--; c1 = c1 + c1 + 1)
        {
            if (c1 >= n)
            {
                console.log("NO");
                return;
            }
            else
                A[c1] = b.num;
        }
    }
    console.log("YES");
    console.log(String(A).replace(/\,/g, " "));
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

