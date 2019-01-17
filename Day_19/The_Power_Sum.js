function powerSum(X, N,num) {
    if (Math.pow(num, N) < X) {
        return powerSum(X, N, num + 1) + powerSum(X - Math.pow(num, N), N, num + 1)
    } else if (Math.pow(num, N) == X) {
        return 1;
    } else {
        return 0;
    }
}