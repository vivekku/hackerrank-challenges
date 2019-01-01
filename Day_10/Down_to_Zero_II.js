
function downToZero(n) {
    return moves[n]
}

let moves = [0]
for (let i = 0; i < 1000000; i++) {
    if (!moves[i + 1]) moves[i + 1] = Number.MAX_SAFE_INTEGER
    moves[i + 1] = Math.min(moves[i + 1], moves[i] + 1)
    let j = 2
    while (j <= i && j * i <= 1000000) {
        if (!moves[i * j]) moves[i * j] = Number.MAX_SAFE_INTEGER
        moves[i * j] = Math.min(moves[i * j], moves[i] + 1)
        j += 1
    }
}