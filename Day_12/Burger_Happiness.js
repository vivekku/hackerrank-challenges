function processData(input) {
    var input_lines = input.split("\n");    
    var N = new Number(input_lines[0]);    
    var i, j, arr, r, state = [];    
    for (i = 0; i < N; i++) {
        arr = [];
        for (j = 0; j <= i; j++) {
            arr.push(0);
        }
        state.push(arr);
    }    
    var locs = [], res = [], a, s, costs;    
    for (i = 0; i < N; i++) {
        arr = input_lines[i + 1].split(" ").map(Number);
        r = { id: i, x: arr[0], a: arr[1], b: arr[2] };
        insert(locs, res, i - 1, r);
        costs = get_costs(locs, res[i]);        
        for(j = 0; j <= i; j++) {
            a = locs[res[j]].a;
            
            if (j < i) {
                state[i][j] = Math.max(state[i - 1][j], a, 0);
            }
            else {
                state[i][j] = Math.max(a, 0);                
                for (k = 0; k < j; k++) {
                    s = a + state[i - 1][k] - costs[k];                    
                    if (state[i][j] < s) {
                        state[i][j] = s;
                    }
                }
            }
        }
    }    
    s = 0;
    for (j = 0; j < N; j++) {
        if (s < state[N - 1][j]) {
            s = state[N - 1][j];
        }
    }    
    console.log(s);
} 

function insert(locs, res, tail, r) {
    var i;    
    for (i = tail + 1; i >= 0; i--) {
        if (i === 0 || locs[i - 1].x < r.x) {
            locs[i] = r;
            res[r.id] = i;
            break;
        }
        else {
            locs[i] = locs[i - 1];
            res[locs[i].id] = i;
        }
    }
}

function get_costs(locs, dest) {
    var i, s, c = [];    
    i = dest - 1;
    s = 0;    
    while(i >= 0) {
        s = s + locs[i].b;
        c[locs[i].id] = s;
        i = i - 1;
    }    
    i = dest + 1;
    s = 0;    
    while (i < locs.length) {
        s = s + locs[i].b;
        c[locs[i].id] = s;
        i = i + 1;
    }    
    c[locs[dest].id] = 0;    
    return c;
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
