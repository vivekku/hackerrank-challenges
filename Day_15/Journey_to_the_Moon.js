function journeyToMoon(n, astronaut) {
	
	function nC2(n) {
    return n * (n - 1) / 2;
  };

    var nations = [];
    var map = [];
    for(var i = 0; i < astronaut.length; i++) {
      var pair = astronaut[i];
      if(map[pair[0]] && !map[pair[1]]) {
        map[pair[0]].push(pair[1]);
        map[pair[1]] = map[pair[0]];
      } else if(map[pair[1]] && !map[pair[0]]) {
        map[pair[1]].push(pair[0])
        map[pair[0]] = map[pair[1]]
      } else if(!map[pair[0]] && !map[pair[1]]) {
        var nation = [pair[0], pair[1]];
        map[pair[0]] = nation;
        map[pair[1]] = nation;
        nations.push(nation);
      } else if(map[pair[1]] != map[pair[0]]) {
        var deleteNation = map[pair[1]];
        map[pair[1]].forEach(function (p) {
          map[pair[0]].push(p);
          map[p] = map[pair[0]]
        });
        deleteNation.length = 0;
      }
    }
    var result = nC2(n);
    for(var i = 0; i < nations.length; i++) {
      result -= nC2(nations[i].length);
    }
    return result;
}