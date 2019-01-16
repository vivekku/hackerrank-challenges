function kingdomDivision(n, roads) {
    const arr = [];
    const bfarr = [0];
    let count1 = 0;
    let count2 = 0;
    for (let x = 0; x < n; x++) {
        arr[x] = {'connections':[], 'valid': 0, 'invalid': 0}; 
    };
    for (let y in roads) {
        arr[roads[y][0] - 1].connections.push(roads[y][1] - 1);
        arr[roads[y][1] - 1].connections.push(roads[y][0] - 1);
    };
    let i = 0
    while (bfarr.length < arr.length) {
        for (let z in arr[bfarr[i]].connections) {
            if (!bfarr.includes(arr[bfarr[i]].connections[z])) {
                bfarr.push(arr[bfarr[i]].connections[z]);
            }
        }
        i++;
    }
    while (bfarr.length > 0) {
        const node = bfarr.pop();
        if (arr[node].connections.length === 1 && bfarr.includes(arr[node].connections[0])) {
            arr[node].valid = 0;
            arr[node].invalid = 1;
        } else {
            let t = 1;
            let e = 1;
            for (let m in arr[node].connections) {
                if (!bfarr.includes(arr[node].connections[m])) {
                    t *= 2 * arr[arr[node].connections[m]].valid + arr[arr[node].connections[m]].invalid;
                    e *= arr[arr[node].connections[m]].valid;
                }
            }
            arr[node].valid = t - e;
            arr[node].invalid = e;
        }
    }    
    return (2 * arr[0].valid) % (10 ** 9 + 7);
}