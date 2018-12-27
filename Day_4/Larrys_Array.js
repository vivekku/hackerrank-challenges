function larrysArray(A) {
    var canTry = true;
    var i = 0;
    while (canTry) {
        if (A[i + 1] <= A[i] && A[i + 1] <= A[i + 2]) {
            var t = A[i];
            A[i] = A[i + 1];
            A[i + 1] = A[i + 2];
            A[i + 2] = t;
            i = 0;
            continue;
        } else if (A[i + 2] <= A[i] && A[i + 1] <= A[i + 1]) {
            var t = A[i];
            A[i] = A[i + 2];
            A[i + 2] = A[i + 1];
            A[i + 1] = t;
            i = 0;
            continue;
        }
        if (i == A.length - 3) {
            canTry = false;
            if (A[i + 1] > A[i + 2]) {
                return "NO";
            } else {
                return "YES";
            }
        }
        i++;
    }
}