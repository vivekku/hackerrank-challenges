function marcsCakewalk(calorie) {
    calorie.sort((a, b) => a - b);
    calorie.reverse();
    var miles = 0;
    for (var i = 0; i < calorie.length; i++){
        miles += 2 ** i * calorie[i];
    }
    return miles;
}