function travelAroundTheWorld(a, b, c) {
    const N = a.length;
    let count = N;
    let prox_city = true;
    let possible = new Array(N).fill(false);

    for(let start_city = N - 1; start_city >= 0; start_city--){
        let tank = 0;
        possible[start_city] = true;
        for(var i = 0; i < N; i++){
            let j = (i + start_city)%N;
            let next_city = (j+1)%N;
            tank =  Math.min(tank + a[j], c) - b[j];
            if(tank >= 0){
                if(possible[next_city]){ break; }
            }
            else{
                count--;
                possible[start_city] = false;
                break;
            }
        }
    }
    return count;
}