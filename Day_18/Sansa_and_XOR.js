function sansaXor(arr) {
    var xor = 0;
    for (let i = 0; i < arr.length; i++) {
        if (((i + 1) * (arr.length - i)) % 2 == 1) {
            xor ^= arr[i]
        }
    }
    return xor;
}