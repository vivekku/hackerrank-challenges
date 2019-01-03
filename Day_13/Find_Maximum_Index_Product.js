function processData(input) {
    //Enter your code here
    var lines = input.split('\n');
    lines.shift();
    var numbers = lines.shift().split(' ');
    
    var rightGreaterThans = [];
    var leftGreaterThans = [];
    
    Array.prototype.toIntArray = function (){
        for (var index = 0; index < this.length; index++){
            this[index] = parseInt(this[index]);
        }
    }
    numbers.toIntArray();
    
    var maxIndexProduct = 0;
    var curIndexProduct;
    var maxIndex, maxLeft, maxRight;
    for (var index = 0; index < numbers.length; index++){
        for (var leftIndex = index-1; leftIndex >= 0; ){
            if (numbers[leftIndex] > numbers[index]){
                leftGreaterThans[index] = leftIndex;
                break;
            }
            if (leftGreaterThans[leftIndex] != null){
                leftIndex = leftGreaterThans[leftIndex];
            }
            else {
                leftGreaterThans[index] = null;
                break;
            }
        }
    }
    
    var maxIndex;
    for (var index = numbers.length-1; index >= 0; index--){
        for (var rightIndex = index +1 ; rightIndex < numbers.length;){
            if (numbers[rightIndex] > numbers[index]){
                rightGreaterThans[index] = rightIndex;
                break;
            }
            if (rightGreaterThans[rightIndex] != null){
                rightIndex = rightGreaterThans[rightIndex];
            }
            else {
                rightGreaterThans[index] = null;
                break;
            }
        }
        if (leftGreaterThans[index] != null && rightGreaterThans[index] != null){
            curIndexProduct = (leftGreaterThans[index] + 1)  * (rightGreaterThans[index] + 1);
            if (curIndexProduct > maxIndexProduct){
                maxIndex = index;
                maxIndexProduct = curIndexProduct;
            }
        }
        
    }
    console.log(maxIndexProduct);
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
