function processData(input) {
    var input_stdin_array = '';
    var array = [];
    input_stdin_array = input.split('\n');
    var n = parseInt(input_stdin_array[0]);
    var line = input_stdin_array[1].split(' ');
    for (var i=0; i<n; i++) {
        array[i+1] = parseInt(line[i]);
    }
    var max = 0;
    if (n == 1 || n == 2) {
        console.log(0);
    } else {
        for (var i=2; i<n; i++) {
            var left = leftIndex(i);
            var right;
            if (left != 0) {
                right = rightIndex(i);
                if (right != 0) {
                    var index_product = left * right;
                    if (index_product > max) {
                        max = index_product;
                    }
                }
            }
        }
        console.log(max);   
    }

    function leftIndex(index) {
        for (var j=index-1; j>=1; j--) {
            if (array[j] > array[index]) {
                return j;
            }
        }
        return 0;
    }
    
    function rightIndex(index) {
        for (var k=index+1; k<=n; k++) {
            if (array[k] > array[index]) {
                return k;
            }
        }
        return 0;
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
