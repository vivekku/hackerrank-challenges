function flippingMatrix(matrix) {
    let sum = 0;
    const m = matrix.length - 1;
    const n = matrix.length / 2;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const leftUp = matrix[i][j];
            const leftDown = matrix[m - i][j];
            const rightUp = matrix[i][m - j];
            const rightDown = matrix[m - i][m - j];
            const arr = [leftUp, leftDown, rightDown, rightUp];
            arr.sort((a, b) => b - a);
            sum += arr[0];
        }
    }
    return sum;
}