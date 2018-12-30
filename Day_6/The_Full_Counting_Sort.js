function countSort(arr) {   
    var b = [];
    for(var i = 0; i < 100; i++)
        b[i] = [];
    var half = Math.floor(arr.length/2)
    for(var i = 0; i < arr.length; i++){
        b[arr[i][0]].push(i < half ? "-" : arr[i][1]);
    }
    var output = [];
    for(var i = 0; i < 100; i++){
        for(var j = 0; j < b[i].length; j++)
            output.push(b[i][j]);
    }
    console.log(output.join(" "));
}