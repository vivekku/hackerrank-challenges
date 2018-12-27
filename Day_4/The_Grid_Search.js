function gridSearch(G, P) {
    var search = 0;
    for (var i = 0; i < G.length; i++){
        for (var j = 0; j < G[i].length; j++) {
            if (P[0][0] == G[i][j]) {
                for (var x = 0; x < P.length; x++){
                    for (var y = 0; y < P[x].length; y++){
                        if (P[x][y] == G[i + x][j + y]) {
                            search = 1;
                        } else {
                            search = 0;
                            break;
                        }
                    }
                    if (search == 0) {
                        break;
                    }
                }
            }
            if (search == 1) {
                break;
            }
        }
        if (search == 1) {
            break;
        }
    }
    if (search == 1) {
        return "YES";
    } else {
        return "NO";
    }
}