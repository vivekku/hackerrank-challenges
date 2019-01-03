process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function findMin(arr, l, r) {
    var min = arr[l];
    for (var i = l + 1; i < r; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function doCommonSum(arr, l, r) {
    var sum = 0;
    for (var i = l; i < r; i++) {
        sum += arr[i];
    }
    return sum;
}

function doSum(arr) {
    var sum = arr.reduce(function(a, b) {
      return a + b;
    }, 0);
    return sum;
}

function printArray(arr, left, right) {
    var output = [];
    for(var i = left; i <= right; i++) {
        output.push(arr[i]);
    }
    console.log(output.join(' '));
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var q = parseInt(n_temp[1]);
    box = readLine().split(' ');
    box = box.map(Number);
    for(var a0 = 0; a0 < q; a0++){
        var operation = readLine().split(' ');
        var l, r, c, d;
        var type = parseInt(operation[0]);
        switch(type) {
            case 1:
                l = parseInt(operation[1]);
                r = parseInt(operation[2]);
                c = parseInt(operation[3]);
                for (var i = l; i <= r; i++) {
                    box[i] += c;
                }
                break;
            case 2:
                l = parseInt(operation[1]);
                r = parseInt(operation[2]);
                d = parseInt(operation[3]);
                for (var i = l; i <= r; i++) {
                    box[i] = Math.floor(box[i] / d);
                }
                break;
            case 3:
                l = parseInt(operation[1]);
                r = parseInt(operation[2]);
                console.log(findMin(box, l, r + 1));
                break;
            case 4:
                l = parseInt(operation[1]);
                r = parseInt(operation[2]);
                console.log(doCommonSum(box, l, r + 1));
                break;
        }
    }
}
