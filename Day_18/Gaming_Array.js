function gamingArray(arr) {
    let count = 0,
        max = 0;
    arr.forEach(val => {
        if (val > max) {
            count++;
            max = val;
        }
    });
    return count % 2 === 0 ? 'ANDY' : 'BOB';
}