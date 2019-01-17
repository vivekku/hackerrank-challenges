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

function rotate(puzzle, moveList, i, j, k) {
    moveList.push([i,j,k]);
    i--;
    j--;
    for(var ring = 0; ring < k/2; ring++) {
        for(var col = ring; col < k-1-ring; col++) {
            var tl = puzzle[ring + i][col+ring + j];
            var tr = puzzle[col+ring + i][k-1-ring + j];
            var br = puzzle[k-1-ring + i][k-1-col-ring + j];
            var bl = puzzle[k-1-col-ring + i][ring + j];
            puzzle[ring + i][col+ring + j] = bl;
            puzzle[col+ring + i][k-1-ring + j] = tl;
            puzzle[k-1-ring + i][k-1-col-ring + j] = tr;
            puzzle[k-1-col-ring + i][ring + j] = br;
        }
    }
}

function printSolution(moveList) {
    console.log(moveList.length);
    for(var i = 0; i < moveList.length; i++) {
        console.log(moveList[i].join(' '));
    }
}

function main() {
    var n = parseInt(readLine());
    var puzzle = [];
    for(puzzle_i = 0; puzzle_i < n; puzzle_i++){
       puzzle[puzzle_i] = readLine().split(' ');
       puzzle[puzzle_i] = puzzle[puzzle_i].map(Number);
    }    
    var moveList = [];    
    var i = 1;
    var j = 1;
    var k = n;    
    while(moveList.length < 500 && k > 1) {
        if(puzzle[i-1][j-1] !== Math.min(puzzle[i-1][j-1], puzzle[i-1 + k-1][j-1], puzzle[i-1][j-1 + k-1], puzzle[i-1 + k-1][j-1 + k-1])) {
            rotate(puzzle,moveList,i,j,k);
        }
        else {
            if(j-1+k < n) {
                j++;
            }
            else if(i-1+k < n) {
                j = 1;
                i++;
            }
            else {
                i = 1;
                j = 1;
                k--;
            }
        }
    }
    printSolution(moveList);
}
