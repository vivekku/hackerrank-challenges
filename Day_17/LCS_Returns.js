function processData(input) {
    var inputStrings = input.split('\n');

    var A = inputStrings[0];
    var B = inputStrings[1];

    var lcsPrefixes = lcs(A, B);
    var lcsSuffixes = lcs(A.split('').reverse().join(''), B.split('').reverse().join(''));

    var numberOfSolutions = insertionSolutionsIncreasingLcsLengthByOne(lcsPrefixes, lcsSuffixes, B);

    console.log(numberOfSolutions);

    function lcs(a, b) {
        var A = a.split('');
        var B = b.split('');

        A.unshift(null);
        B.unshift(null);

        var rows = A.length;
        var columns = B.length;

        var lcsMatrix = matrix(rows, columns);

        for (var i = 0; i < rows; ++i) {
            for (var j = 0; j < columns; ++j) {
                var value;

                if (i == 0 || j == 0) {
                    value = 0;
                } else if (A[i] == B[j]) {
                    value = lcsMatrix[i-1][j-1] + 1;
                } else {
                    value = Math.max(lcsMatrix[i][j-1], lcsMatrix[i-1][j]);
                }

                lcsMatrix[i][j] = value;
            }
        }

        return lcsMatrix;

        function matrix(rows, columns) {
            var matrix = [];
            for (var i = 0; i < rows; ++i) {
                var rowBuffer = new ArrayBuffer(columns * 2);
                matrix[i] = new Int16Array(rowBuffer);
            }
            return matrix;
        }
    }


    function insertionSolutionsIncreasingLcsLengthByOne(lcsPrefixes, lcsSuffixes, insertionSource) {
        var numberOfRows = lcsPrefixes.length;
        var numberOfColumns = lcsPrefixes[0].length;
        var targetLength = lcsPrefixes[numberOfRows - 1][numberOfColumns - 1] + 1;

        var B = insertionSource.split('');
        B.unshift(null);

        var numberOfSolutions = 0;

        for (var i = 1; i <= numberOfRows; ++i) {
            var solutions = [];

            for (var j = 1; j < B.length; ++j) {
                var lcsLengthOfPrefixes = lcsPrefixes[i - 1][j - 1];
                var lcsLengthOfSuffixes = i < numberOfRows ?
                    lcsSuffixes[numberOfRows - i][numberOfColumns - (j + 1)] :
                    0;

                var lcsLength = lcsLengthOfPrefixes + 1 + lcsLengthOfSuffixes;

                if (lcsLength == targetLength) {
                    addSolutionToList(B[j], solutions);
                } else if (lcsLength > targetLength) {
                    removeSolutionFromList(B[j], solutions);
                }
            }

            numberOfSolutions += solutions.length;
        }

        return numberOfSolutions;

        function addSolutionToList(solution, list) {
            list.indexOf(solution) < 0 && list.push(solution);
        }

        function removeSolutionFromList(solution, list) {
            var solutionIndex = list.indexOf(solution);
            solutionIndex >= 0 && list.splice(solutionIndex, 1);
        }
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
