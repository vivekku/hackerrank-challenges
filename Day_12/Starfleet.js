var planes = [];
var numPlanes;
var numQueries;
var planeLookup = {};

var yPositions = [];
var numPositions;
var sumFreq = [];

function processData(input) {
    var lines = input.split("\n");
    var lineIndex = 0;
    
    var info = lines[lineIndex++].split(" ");
    
    numPlanes = info[0];
    numQueries = info[1];
    
    for (var i = 0; i < numPlanes; i++) {
        info = lines[lineIndex++].split(" ");
        var y = parseInt(info[1]),
            f = parseInt(info[2]);
        
        var freqLookup = planeLookup[y];
        
        if (freqLookup === undefined) {
            freqLookup = {};
            planeLookup[y] = freqLookup;
            yPositions.push(y);
        }

        if (freqLookup[f] === undefined) {
            freqLookup[f] = 1;
        } else {
            freqLookup[f] = freqLookup[f] + 1;
        }
    }
    
    // Sort sparse y-array
    yPositions = yPositions.sort(function(a, b) {
        return a - b;
    });
    
    // Build linear summed frequecies
    var lastSum = {};
    numPositions = yPositions.length;
    for (var i = 0; i < numPositions; i++) {
        var y = yPositions[i];
        
        var freqLookup = planeLookup[y];
        var currentSum = {};
        
        Object.assign(currentSum, lastSum);
        
        for (var f in freqLookup) {
            currentSum[f] = freqLookup[f] + (currentSum[f] || 0);
        }        
        
        sumFreq.push(currentSum);
        
        lastSum = currentSum;
    }
    
    // Handle queries
        
    for (var i = 0; i < numQueries; i++) {
        info = lines[lineIndex++].split(" ");
        var upper = parseInt(info[0]);
        var lower = parseInt(info[1]);
        var store = {};
        var max = 0;
        
        var lowerIndex = binarySearch(lower);
        var upperIndex = binarySearch(upper);
        
        if (yPositions[lowerIndex] >= lower) {
            lowerIndex--;
        }
        
        var lowerSumFreq = lowerIndex > -1 ? sumFreq[lowerIndex] : {};
        var upperSumFreq = sumFreq[upperIndex];
        
        for (var f in upperSumFreq) {
            var freq = upperSumFreq[f] - (lowerSumFreq[f] || 0);
            
            if (freq > max) {
                max = freq;
            }
        }

        console.log(max);
    }
    
}

function binarySearch(target) {
    var left = 0;
    var right = numPositions - 1;
    var mid = Math.floor((left + right) / 2);
        
    while (left < right) {
        if (yPositions[mid] === target) {
            return mid;
        }
        
        if (yPositions[mid] < target) {
            left = mid + 1;    
        } else {
            right = mid - 1;
        }
        mid = Math.floor((left + right) / 2);
    }
        
    return mid;
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
