function workbook(n, k, arr) {
    var page = 0, specialProblems = 0, problems, temp, i;
    for (i = 0; i < n; i++) {
        temp = 1, problems = 0;
        while (temp <= arr[i]) {
            if (problems < 1) {
                problems = k;
                page++;
            }
            if (temp == page) {
                specialProblems++;
            }
            temp++;
            problems--;
        }
    }
    return specialProblems;
}