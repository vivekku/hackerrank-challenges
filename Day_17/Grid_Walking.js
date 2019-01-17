function processData(input) {
    var inputData = input.split('\n');
    var numberOfTestCases = parseInt(inputData.shift());
    
    var results = [];
    var RESULTS_MODULUS = 1000000007;
    
    for (var testCase = 0; testCase < numberOfTestCases; ++testCase) {
        var testDataFirstLine = inputData.shift().split(' ');
        var testDataSecondLine = inputData.shift().split(' ');
        var testDataThirdLine = inputData.shift().split(' ');
        
        var N = parseInt(testDataFirstLine[0]);  // number of dimensions
        var M = parseInt(testDataFirstLine[1]);  // number of steps
        
        var xs = testDataSecondLine.map(function (val) {return parseInt(val);});  // initial values
        var Ds = testDataThirdLine.map(function (val) {return parseInt(val);});  // magnitudes of each dimension
        
        var memoizedResults = [];
        for (var i = 0; i < M; ++i) {memoizedResults.push({});}
        
        var totalNumberOfResults = resultsForSteps(M, M, Ds, xs, memoizedResults);
        
        results.push(totalNumberOfResults);

        function resultsForSteps(totalSteps, stepsRemaining, maximums, currentPosition, memoized) {
            var memoizedResult = memoized[totalSteps - stepsRemaining][currentPosition];
            if (memoizedResult) {return memoizedResult;}
            
            var nextPositions = nextPositionsGivenMaximums(maximums, currentPosition);
            
            if (stepsRemaining == 1) {
                memoized[totalSteps - stepsRemaining][currentPosition] = nextPositions.length;
                return nextPositions.length;
            }
            
            var numberOfResults = 0;
            for (var i = 0; i < nextPositions.length; ++i) {
                numberOfResults +=
                    resultsForSteps(totalSteps, stepsRemaining - 1, maximums, nextPositions[i], memoized);
                numberOfResults %= RESULTS_MODULUS;
            }
            memoized[totalSteps - stepsRemaining][currentPosition] = numberOfResults;
            
            return numberOfResults;
        }
        
        function nextPositionsGivenMaximums(maximums, position) {
            var nextPositions = [];
            
            for (var dim = 0; dim < position.length; ++dim) {
                position[dim] > 1 &&
                    nextPositions.push(setValueAtIndex(dim, position[dim] - 1, position));
                position[dim] < maximums[dim] &&
                    nextPositions.push(setValueAtIndex(dim, position[dim] + 1, position));
            }
            
            return nextPositions;
            
            function setValueAtIndex(index, value, values) {
                var prefix = values.slice(0, index);
                var suffix = values.slice(index + 1, values.length);
                
                return prefix.concat(value).concat(suffix);
            }
        }
    }
    
    console.log(results.join('\n'));
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
