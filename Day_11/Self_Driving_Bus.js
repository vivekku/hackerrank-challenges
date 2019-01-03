function solve(tree, n) {
    return n * 2 - 1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let tree = Array(n-1);

    for (let treeRowItr = 0; treeRowItr < n-1; treeRowItr++) {
        tree[treeRowItr] = readLine().split(' ').map(treeTemp => parseInt(treeTemp, 10));
    }

    let result = solve(tree, n);

    ws.write(result + "\n");

    ws.end();
}
