function processData(input) {
    var lines = input.split("\n");
    var size = lines.splice(0,1);
    var numNodes = size[0].split(" ")[0];
    var array = [];
    for(var i = 0; i <= numNodes; i++) {
        array.push(1);
    }
    var lines_length = lines.length;
    var p, c;
    for (var i = lines_length-1; i >=0; i--) {
        p = lines[i].split(" ")[1];
        c = lines[i].split(" ")[0];
        array[p] += parseInt(array[c]);
    }
    
    var cuts = 0;
    for (var i = 2; i < array.length; i++) {
        if (array[i] % 2 == 0) cuts++;
    }
    console.log(cuts);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
