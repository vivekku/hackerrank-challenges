function toys(w) {
	w = w.sort((a,b)=> a-b);
	let containers = 1;
	let min = w[0];
	for(let i = 1; i < w.length; i++) {
		if(w[i] - min > 4) {
		  min = w[i];
		  containers++;
		}
		  
	}
	return containers;
}