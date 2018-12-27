function gradingStudents(grades) {
    for (var i = 0; i < grades.length; i++){
        if (grades[i] >= 38) {
           var dif = 5 - (grades[i] % 5);
            if (dif < 3) {
                grades[i] += dif;
            }
        }
    }
    return grades;
}