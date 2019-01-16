function equal(arr) {
	var min=Infinity, steps = Infinity;    
    for(var i=0; i<arr.length; i++) {
        if(min > arr[i])
            min = arr[i];
    }    
    for(var base=0; base<3; base++) {
        var currentSteps = 0;            
        for(var i=0; i<arr.length; i++) {
            var delta = arr[i] - min + base;
            currentSteps += Math.floor(delta/5);
            delta = delta % 5;
            
            currentSteps += Math.floor(delta/2);
            currentSteps += delta % 2;
        }            
        steps = Math.min(steps, currentSteps);
    }    
    return steps;
}