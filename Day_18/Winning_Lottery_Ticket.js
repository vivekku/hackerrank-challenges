function winningLotteryTicket(tickets) {
	var frequency = new Array(1024).fill(0);
	var binary;
	var counter = 0;
	for (var i = 0; i < tickets.length; i++) {
		binary = binaryEquivalent(tickets[i]);
		frequency[binary]++;
	}
	for (var i = 0; i < 1023; i++) {
		if(frequency[i]==0)
			continue;
		for(var j=i+1;j<1024;j++) {
			if((i|j)==1023)
				counter += frequency[i]*frequency[j];
		}
	}
	counter += frequency[1023]*(frequency[1023]-1)/2;
	return counter;
}

function binaryEquivalent(s) {
        var binaryBuilder;
        var bits = new Array(10).fill('0');
        var character;
        for (var i = 0; i < s.length; i++) {
            bits[s.charCodeAt(i)-48] = '1';
        }
        binaryBuilder = ""+bits[0]+bits[1]+bits[2]+bits[3]+bits[4]+bits[5]+bits[6]+bits[7]+bits[8]+bits[9];
        return parseInt(binaryBuilder, 2);
}
