function dfs(matrix, i, j, marked) {
    marked[i][j] = true

    let n = matrix.length,
        m = matrix[0].length
    // neighbours
    let r = [i - 1, i + 0, i + 0, i + 1]
    let c = [j + 0, j - 1, j + 1, j + 0]

    let turns = 0,
        found = false
    for (let k = 0; k < 4; k++) {
        let valid = (r[k] >= 0 && r[k] < n && // check row boundary
            c[k] >= 0 && c[k] < m && // check col boundary
            !marked[r[k]][c[k]])
        if (valid && (matrix[r[k]][c[k]] == "." || matrix[r[k]][c[k]] == "*")) {
            turns++
            if (matrix[r[k]][c[k]] == "*") {
                found = true
            }
        }

    }
    if (turns == 0 && !found) {
        return -10000
    }
    let dec = 0
    for (let k = 0; k < 4 && !found; k++) {
        let valid = (r[k] >= 0 && r[k] < n && // check row boundary
            c[k] >= 0 && c[k] < m && // check col boundary
            !marked[r[k]][c[k]]) // check not marked and is node

        if (valid && matrix[r[k]][c[k]] == ".") {
            let d = dfs(matrix, r[k], c[k], marked)
            if (d > dec) {
                dec = d
            }
        }
    }

    if (turns > 1) {
        dec += 1
    }

    return dec
}

function countLuck(matrix, k) {
    let n = matrix.length
    let m = matrix[0].length
    let marked = Array(n).fill([])
    marked.forEach((_, i) => marked[i] = Array(m).fill(false))

    let luck = 0
    iloop:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!marked[i][j] && matrix[i][j] == "M") {
                luck = dfs(matrix, i, j, marked)
                break iloop
            }
        }
    }

    return luck == k ? "Impressed" : "Oops!"
}