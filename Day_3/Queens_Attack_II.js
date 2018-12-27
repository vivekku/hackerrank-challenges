function queensAttack(n, k, r_q, c_q, obstacles) {
    var upx = -1, upy = -1;
    var downx = -1, downy = -1;
    var leftx = -1, lefty = -1;
    var rightx = -1, righty = -1;
    var upleftx = -1, uplefty = -1;
    var downleftx = -1, downlefty = -1;
    var uprightx = -1, uprighty = -1;
    var downrightx = -1, downrighty = -1;
    var countSquares = 0;
    for (var i = 0; i < k; i++){
        if ((obstacles[i][0] < upx || upx == -1) && obstacles[i][0] > r_q && obstacles[i][1] == c_q) {
            upx = obstacles[i][0];
            upy = obstacles[i][1];
        }
        if ((obstacles[i][0] > downx || downx == -1) && obstacles[i][0] < r_q && obstacles[i][1] == c_q) {
            downx = obstacles[i][0];
            downy = obstacles[i][1];
        }
        if ((obstacles[i][1] > lefty || lefty == -1) && obstacles[i][1] < c_q && obstacles[i][0] == r_q) {
            leftx = obstacles[i][0];
            lefty = obstacles[i][1];
        }
        if ((obstacles[i][1] < righty || righty == -1) && obstacles[i][1] > c_q && obstacles[i][0] == r_q) {
            rightx = obstacles[i][0];
            righty = obstacles[i][1];
        }
        if ((obstacles[i][0] < uprightx && obstacles[i][1] < uprighty || uprightx == -1) && obstacles[i][0] - r_q == obstacles[i][1] - c_q && obstacles[i][0] > r_q && obstacles[i][1] > c_q)        {
            uprightx = obstacles[i][0];
            uprighty = obstacles[i][1];            
        }
        if ((obstacles[i][0] < upleftx && obstacles[i][1] > uplefty || upleftx == -1) && obstacles[i][0] - r_q == c_q - obstacles[i][1] && obstacles[i][0] > r_q && obstacles[i][1] < c_q) {
            upleftx = obstacles[i][0];
            uplefty = obstacles[i][1];
        }
        if ((obstacles[i][0] > downrightx && obstacles[i][1] < downrighty || downrightx == -1) && r_q - obstacles[i][0] == obstacles[i][1] - c_q && obstacles[i][0] < r_q && obstacles[i][1] > c_q) {
            downrightx = obstacles[i][0];
            downrighty = obstacles[i][1];
        }
        if ((obstacles[i][0] > downleftx && obstacles[i][1] > downlefty || downleftx == -1) && r_q - obstacles[i][0] == c_q - obstacles[i][1] && obstacles[i][0] < r_q && obstacles[i][1] < c_q) {
            downleftx = obstacles[i][0];
            downlefty = obstacles[i][1];
        }
    }
    countSquares += (upx != -1) ? (upx - r_q - 1) : (n - r_q);
    countSquares += (downx != -1) ? (r_q - downx - 1) : (r_q - 1);
    countSquares += (lefty != -1) ? (c_q - lefty - 1) : (c_q - 1);
    countSquares += (righty != -1) ? (righty - c_q - 1) : (n - c_q);
    countSquares += (uplefty != -1) ? (c_q - uplefty - 1) : Math.min(c_q - 1, n - r_q);
    countSquares += (uprightx != -1) ? (uprighty - c_q - 1) : Math.min(n - c_q, n - r_q);
    countSquares += (downleftx != -1) ? (c_q - downlefty - 1) : Math.min(c_q - 1, r_q - 1);
    countSquares += (downrighty != -1) ? (downrighty - c_q - 1) : Math.min(n - c_q, r_q - 1);
    return countSquares;
}