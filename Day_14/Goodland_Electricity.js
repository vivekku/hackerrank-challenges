function pylons(k, arr) {
	var numOfTower = 0, last = -1, prv = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 1) {
			last = i;
		}
        prv[i] = last;
    }    
    for(let i = 0; i < arr.length ;) {
        let take = prv[ Math.min( i + k - 1, arr.length - 1 ) ];
        if ( take === -1 || take + k <= i ) { 
			return -1;
		}
        i = take + k;
        numOfTower++;
    }    
    return numOfTower;
}