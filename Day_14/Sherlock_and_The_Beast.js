function decentNumber(n) {
    var fives = n;
    var threes = 0;
    while(true){
        threes = n-fives;
        if(fives % 3 == 0 && threes % 5 == 0){
            break;
        }
        if(fives <= 0){
            fives = -1;
            break;
        }
        if(fives % 3 == 0){
            fives -= 3;
        }else{
            fives -= fives % 3;
        }
    }
    if(fives == -1){
        console.log(-1);
    }else{
        var largest = "";
        for(var i = 0; i < fives; i++){
            largest += "5";
        }
        for(var i = 0; i < threes; i++){
            largest += "3";
        }
        console.log(largest);
    }
}