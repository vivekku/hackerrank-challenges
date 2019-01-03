function build_perm(n, dist, already, tracker, answers) {
    if (already.length >= n) {
        answers.push(already.slice())
        return
    }
    var p1 = already[already.length - 1] + dist
    var p2 = already[already.length - 1] - dist
    for (var h2 = 1; h2 < p2 + 1; h2++) {
        if (!tracker[h2]) {
            tracker[h2] = true
            already.push(h2)
            build_perm(n, dist, already, tracker, answers)
            tracker[h2] = false
            already.pop()
        }
    }

    for (var h1 = p1; h1 < n + 1; h1++) {
        if (!tracker[h1]) {
            tracker[h1] = true
            already.push(h1)
            build_perm(n, dist, already, tracker, answers)
            tracker[h1] = false
            already.pop()
        }
    }
    return
}

function find_perm(n, k) {
    dist = Math.floor(n / 2)
    answers = []
    tracker = [false]
    for (var i = 1; i < n + 1; i++) {
        for (var t = 1; t < n + 1; t++) {
            tracker[t] = false
        }
        already = [i]
        tracker[i] = true
        build_perm(n, dist, already, tracker, answers)
    }
    if (answers.length >= k) {
        for (a of answers[k - 1]) {
            process.stdout.write(a + " ")
        }
        process.stdout.write("\n")
    } else {
        process.stdout.write("-1\n")
    }
}

function processData(input) {
    input = input.split('\n')
    idx = 0
    t = parseInt(input[idx++])
    for (var i = 0; i < t; i++) {
        test = input[idx++]
        test = test.split(' ')
        n = parseInt(test[0])
        k = parseInt(test[1])
        find_perm(n, k)
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

