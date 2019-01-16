function abbreviation(a, b) {
	let mem = Array(a.length + 1).fill(0).map(_ => Array(b.length + 1).fill(false));
    mem[a.length][b.length] = true;
    let i = a.length - 1;
    while (i > -1 && a[i] === a[i].toLowerCase()) {
        mem[i--][b.length] = true;
    }
    while (i > -1) {
        mem[i--][b.length] = false;
    }
    let j = b.length - 1;
    while (j > -1 && b[j] === a[j].toLowerCase()) {
        mem[a.length][j--] = true;
    }
    while (j > -1) {
        mem[a.length][j--] = false;
    }
    for (let i = a.length - 1; i > -1; i--) {
        for (let j = b.length - 1; j > -1; j--) {
            if (a[i].toLowerCase() === b[j].toLowerCase()) {
                mem[i][j] = mem[i][j] || mem[i+1][j+1];
            }
            if (a[i] === a[i].toLowerCase()) {
                mem[i][j] = mem[i][j] || mem[i + 1][j];
            }
            if (b[j] === b[j].toLowerCase()) {
                mem[i][j] = mem[i][j] || mem[i][j + 1];
            }
        }
    }
    console.log(mem);
    return mem[0][0] ? 'YES' : 'NO';
}