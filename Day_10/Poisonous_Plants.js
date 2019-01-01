function poisonousPlants(p) { 
    var maxDaysAlive = 0;
    var stack = [];
    
    for (var i = 0; i < p.length; i++){
        var daysAlive = 0; 

        while(stack.length > 0 && p[i] <= stack[stack.length - 1].plant)
            daysAlive = Math.max(daysAlive, stack.pop().days); 
        
        
        if (stack.length === 0) 
            daysAlive = 0;
            
        else 
            daysAlive += 1;
        
        maxDaysAlive = Math.max(maxDaysAlive, daysAlive);
        
        stack.push({ 
            plant: p[i],
            days : daysAlive
        });
    }
    return maxDaysAlive;
}