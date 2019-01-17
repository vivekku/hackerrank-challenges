function processData(input) {
    //Enter your code here
    var a = parseInt((2*input)/3);
    var y = parseInt(2*a-input);
    var x = parseInt(input-2*y);
    console.log(a + 1);
	for(var i=0; i<= y; i++){
        console.log(i, Math.abs(Math.round(x+i)), Math.abs(Math.round(input-x-2*i)));
	}
	for(var i=0; i<a-y; i++){
        console.log(Math.abs(Math.round(y+i+1)), i, Math.abs(Math.round(input-y-1-2*i)));
	}
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
