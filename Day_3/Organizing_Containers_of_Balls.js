function organizingContainers(container) {
    var containerTotal = new Array(container.length).fill(0);
    var ballTotal = new Array(container.length).fill(0);
    for (var i = 0; i < container.length; i++){
        for (var j = 0; j < container.length; j++){
            containerTotal[i] += container[i][j];
            ballTotal[j] += container[i][j];
        }
    }
    containerTotal.sort();
    ballTotal.sort();
    for (var i = 0; i < containerTotal.length; i++) {
        if (containerTotal[i] != ballTotal[i]) {
            return "Impossible";
        }        
    }
    return "Possible";
}