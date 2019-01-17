'use strict';
function countBreaks(tower){
  if(tower == 1) {
    return 0;
  }
  var breaks = 0;
  var divisor = 2;
  while(tower > 1) {
    while(tower % divisor == 0) {
      tower /= divisor;
      ++breaks;
    }
    divisor += 1;
  }
  return breaks;
}

function nim(heaps) {
  const nimsum = heaps.reduce((sum, h) => sum^h, 0);
  if(nimsum == 0) {
    return 2
  }
  return 1;
}

function game(towers) {
  const breaks = towers.map(countBreaks);
  console.log(nim(breaks));
}

function main(data) {
  let input = data.split("\n");
  let cases = parseInt(input[0]);
  let i = 1;
  while(cases--) {
    i++; // num towers
    let towers = input[i++].split(' ').map(Number);
    game(towers);
  }
}

let _data = '';
process.stdin.resume();
process.stdin.setEncoding('ascii');
process.stdin.on('data', d => _data += d);
process.stdin.on('end', () => main(_data));