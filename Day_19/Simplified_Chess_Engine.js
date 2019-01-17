var f = [[' ',' ',' ',' '],[' ',' ',' ',' '],[' ',' ',' ',' '],[' ',' ',' ',' ']];
var wb = {'w':[],'b':[]};
var debug = 0;
var op = 0;

function check1(fig, dx, dy, k) {
    if (fig == 'q' || fig == 'Q') {
        return (Math.abs(dx) <= 1) && (Math.abs(dy) <= 1);
    }
    if (fig == 'r' || fig == 'R') {
        return (Math.abs(dx) <= 1) && (Math.abs(dy) <= 1) && (dx == 0 || dy == 0);
    }
    if (fig == 'b' || fig == 'B') {
        return (Math.abs(dx) == 1) && (Math.abs(dy) == 1);
    }
    if (fig == 'n' || fig == 'N') {
        return (Math.abs(dx) + Math.abs(dy) == 3) && (k == 1);
    }
}
function check2(x, y) { if (f[x][y].match(/[QNBRqnbr]/)) return true; else return false; }
function check3(x, y) { return x >= 0 && x < 4 && y >= 0 && y < 4; }

function mkMove(who, m, i, x, y) {    
    if (debug) {
        op++;
        console.log('save', op);
        console.log(f);
    }
    // save position
    var xx = wb[who][i].x;
    var yy = wb[who][i].y;
    var f1 = f[x][y];
    var f2 = f[xx][yy];
    
    // kill figure
    var opp = (who == 'w')?'b':'w';
    var j = -1;
    if (f1 != ' ') {        
        for (var k=0;k<wb[opp].length;k++) {
            if (wb[opp][k].x == x && wb[opp][k].y == y && wb[opp][k].ok) {
                j = k;
                wb[opp][j].ok = 0;
                break;
            }
        }
    }

    // update position
    f[xx][yy] = ' ';
    f[x][y] = f2;
    wb[who][i].x = x;
    wb[who][i].y = y;

    if (debug) {
        console.log('update', op)
        console.log(f);
    }
    var win = move(opp, m-1);
    if (debug) {
        console.log('result', op, win);
        console.log(f);
    }

    // restore figure
    if (j >= 0) wb[opp][j].ok = 1;
    
    // load position
    f[xx][yy] = f2;
    f[x][y] = f1;
    wb[who][i].x = xx;
    wb[who][i].y = yy;
    if (debug) {
        console.log('load', op, m);
        console.log(f);
        console.log(wb['w']);
        console.log(wb['b']);
        op--;
    }    

    return win;
}
    
function move(who, m) {
    if (m == 1 && who == 'b') return 0;    
    if (m == 0) return 0;
    
    
    for (var t=0;t<3;t++) if (t == 0 || m > 1) {
        if (debug) console.log('start moves', who, m, t);
        for (var i=0;i<wb[who].length;i++) if (wb[who][i].ok) {
            var xx = wb[who][i].x; 
            var yy = wb[who][i].y;        
            for (var dx=-2;dx<=2;dx++) {
                for (var dy=-2;dy<=2;dy++) {
                    for (var k=1;k<=3;k++) {
                        if (check1(f[xx][yy],dx,dy,k)) {
                            var x = xx+dx*k;
                            var y = yy+dy*k;
                            if (check3(x, y)) {
                                if (t == 0) {
                                    if (who == 'w' && f[x][y] == 'Q' || who == 'b' && f[x][y] == 'q') {
                                        if (who == 'w') return 1; else return 0;
                                    }
                                }
                                if (t == 1) {
                                    if (who == 'w' && f[x][y].match(/[NBR]/) 
                                     || who == 'b' && f[x][y].match(/[nbr]/)) {
                                        var win = mkMove(who, m, i, x, y);
                                        if (debug) {
                                            console.log('mkMove done', who, win, m, f[x][y]);
                                        }
                                        if (who == 'w' && win || who == 'b' && !win) return win;
                                    }                                    
                                }
                                if (t == 2) {
                                    if (f[x][y] == ' ') {
                                        var win = mkMove(who, m, i, x, y);
                                        if (debug) {
                                            console.log('mkMove done', who, win, m, f[x][y]);
                                        }
                                        if (who == 'w' && win || who == 'b' && !win) return win;
                                    }
                                }
                                if (check2(x, y)) break;
                            }
                        }
                    }
                }
            }
        }
    }
    if (debug) console.log('all moves bad', who, m);
    if (who == 'w') return 0;
    if (who == 'b') return 1;
}

function processData(input) {
    var z = {'A':0, 'B':1, 'C':2, 'D':3, 'a':0, 'b':1, 'c':2, 'd':3};
    var white = {Q: 'q', N: 'n', B: 'b', R: 'r', q: 'q', n: 'n', b: 'b', r: 'r'};
    var black = {Q: 'Q', N: 'N', B: 'B', R: 'R', q: 'Q', n: 'N', b: 'B', r: 'R'};
    var a1 = input.split("\n");
    var g = a1[0]*1;
    var j = 1;
    
    for (var i=0;i<g;i++) {
        var a = a1[j].split(/\s+/).map(Number); j++;
        var w = a[0], b = a[1], m = a[2];

        f = [[' ',' ',' ',' '],[' ',' ',' ',' '],[' ',' ',' ',' '],[' ',' ',' ',' ']];
        wb = {'w':[],'b':[]};
        
        for (var k=0;k<w;k++) {
            var a = a1[j].split(/\s+/); j++;
            f[z[a[1]]][a[2]-1] = white[a[0]];
            wb['w'].push({x:z[a[1]],y:a[2]-1,ok:1});
        }
        for (var k=0;k<b;k++) {
            var a = a1[j].split(/\s+/); j++;
            f[z[a[1]]][a[2]-1] = black[a[0]];
            wb['b'].push({x:z[a[1]],y:a[2]-1,ok:1});
        }
        if (move('w', m)==1) console.log('YES'); else console.log('NO');
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
