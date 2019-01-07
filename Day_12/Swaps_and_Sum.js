function processData(input) {
  var terms = input.split('\n').slice(1);
  var seq = terms.splice(0, 1)[0].split(' ').map(Number);
  var queries = terms.map(function (s) { return s.split(' ').map(Number); });
  var query;
  
  for(var i=0; i<queries.length; i++) {
    query = queries[i];
    
    if(query[0] === 1) {
      seq = reorderArray(seq, query[1]-1, query[2]);
    } else if (query[0] === 2) {
      writeLine(sumArray(seq, query[1]-1, query[2]));
    }
  }
} 

function writeLine(message) {
  process.stdout.write(message + '\n');
}

function sumArray(arr, l, r) {
  var sum = 0;
  for(var i=l; i<r; i++) { sum += arr[i]; }
  
  return sum;
}

function reorderArray(arr, l, r) {
  for(var i=l; i<r; i+=2) {
    swap(arr, i, i+1);
  }
  
  return arr;
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j]
  arr[j] = tmp;
  return arr;
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
