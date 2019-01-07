function processData(input) {
  //Enter your code here
  var lines = input.split('\n');
  for (var i=1; i < lines.length; i++) {
    var a = lines[i].split(' ').map(Number);
    a.shift();
    a.sort(function(x, y){
      return x - y;
    });
    var teams = [];
        t = 0;
    for (var j=0; j < a.length; j++) {
      if (t > 0 && a[j] === teams[t][teams[t].length - 1] && a[j] - teams[t - 1][teams[t - 1].length - 1] === 1) {
        t--;
      } else {
        while ((t < teams.length) &&
               (a[j] - teams[t][teams[t].length - 1] != 1 ||
                (t < teams.length - 1 && a[j] - teams[t + 1][teams[t + 1].length - 1] === 1))) {
          t++;
        } 
      }
      
      if (t < teams.length) {
        teams[t].push(a[j]);
      } else {
        teams.push([a[j]]);
      }
    }
    var min = a.length;
    for (var j=0; j < teams.length; j++) {
      if (teams[j].length < min) {
        min = teams[j].length;
      }
    }
    console.log(min);
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
