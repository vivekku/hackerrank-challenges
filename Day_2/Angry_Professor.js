function angryProfessor(k, a) {
    var students_on_time = 0;
    for (var i = 0; i < a.length; i++){
        if (a[i] < 1) {
            students_on_time++;
        }
    }
    if (students_on_time >= k) {
        return "NO";
    } else {
        return "YES";
    }
}