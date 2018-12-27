function sockMerchant(n, ar) {
    ar.sort();
    var count = 0;
    for (var i = 0; i < ar.length - 1; i++){
        if (ar[i] == ar[i + 1]) {
            count++;
            i++;
        }
    }
    return count;
}