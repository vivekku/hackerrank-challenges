function staircase(n) {
    var line = "";
    for (var i = 1; i <= n; i++){
        for (var j = n; j >= 1; j--){
            if(j<=i)
                line+= "#";
            else
                line += " ";
        }
        console.log(line);
        line = "";
    }
}