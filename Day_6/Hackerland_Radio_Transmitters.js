function hackerlandRadioTransmitters(x, k) {
x.sort(function(a, b) { return a - b; });
  
  var houses = [];
  for (var i = 0; i < x.length; i++)
    houses[x[i]] = 1;
  
  var transmitters = 0;
  var i = 1;
  while (i < houses.length) {
    if (houses[i] !== 1) {
      i++;
      continue;
    }
    
    //found house
    for (var j = i + k; j >= i; j--) {
      if (houses[j] === 1) {
        transmitters++;
        i = j + k + 1;
        while (houses[i] !== 1 && i < houses.length)
          i++;
        break;
      }
    }
  }
  return transmitters;
}
