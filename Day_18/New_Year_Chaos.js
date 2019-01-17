function minimumBribes(q) {
    let total = 0;
    for (let i = q.length - 1; i > -1; i--) {
        if (q[i] - i - 1 > 2) {
            console.log('Too chaotic');
            return;
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                total++;
            }
        }
    }
    console.log(total);
}