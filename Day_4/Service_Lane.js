function serviceLane(n, width, cases) {
    var vehicle = [];
    for (var i = 0; i < cases.length; i++){
        vehicle[i] = width[cases[i][0]];
        for (var j = cases[i][0] + 1; j <= cases[i][1]; j++){
            vehicle[i] = Math.min(vehicle[i], width[j]);
        }
    }
    return vehicle;
}