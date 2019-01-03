function solve(shots, players) {
    var startPos = 0;
    var found;
    var strengthCount = 0;
    if(shots.length>0 && players.length>0){
		var sorter = function(o1, o2) {
			var result = o1[0] - o2[0];
			if (result == 0) {
				result = o1[1] - o2[1];
			}
			return result;
		};
		shots.sort(sorter);
		players.sort(sorter);
		var end3 = (players[players.length-1][1]);        
		for(var i = 0; i< players.length; i++){
			var start1 = (players[i][0]);
			var end1 = (players[i][1]);
			if (i < players.length - 1) {
				end3 = (players[i + 1][1]);
			}
			found = false;
			for (var j = startPos; j < shots.length; j++) {
				var start2 = (shots[j][0]);
				var end2 = (shots[j][1]);

				if (start1 <= end2) {
					if (end1 >= start2) {
						if (!found && (end3 >= start2)) {
							startPos = j;
							found = true;
						}
						strengthCount++;
					} else {
						break;
					}
				}
			}
		}
    }
    return strengthCount;
}