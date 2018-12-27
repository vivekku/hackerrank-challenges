function climbingLeaderboard(scores, alice) {
    var lboard = 2;
    for (var i = scores.length - 1; i > 0; i--){
        if (scores[i] < scores[i - 1]) {
            lboard++;
        }
    }
    var rank = new Array(alice.length);
    var j = scores.length - 1;
    for (var i = 0; i < alice.length; i++){
        while (alice[i] >= scores[j]) {
            if (lboard == 1) {
                break;
            }
            if (scores[j] == scores[j - 1]) {
                j--;
            } else {
                j--;
                lboard--;
            }
        }
        rank[i] = lboard;
    }
    return rank;
}