function acmTeam(topic) {
    var teams = [-1, 0];
    for (var i = 0; i < topic.length - 1; i++){
        for (var j = i + 1; j < topic.length; j++){
            var temp = 0;
            for (var z = 0; z < topic[i].length; z++) {
                temp += (topic[i][z] == '1' || topic[j][z] == '1') ? 1 : 0;
            }
            if (temp > teams[0]) {
                teams[0] = temp;
                teams[1] = 1;
            } else if (temp == teams[0]) {
                teams[1]++;
            }
        }
    }
    return teams;
}