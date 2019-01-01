function truckTour(pumps) {
    var curGas = 0;
    var startingPoint = 0;
    for (var i = 0; i < pumps.length-1; i++) {
        curGas += pumps[i][0];
        if(curGas < pumps[i][1]) {
            curGas = 0;
            startingPoint = i+1;
        }
        else {
            curGas -= pumps[i][1];
        }
    }    
    return startingPoint;
}
