'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function passwordCracker(pass, attempt) {
	let result = [], memo = {};  
	const backtrack = (subTarget) => {
		if (subTarget.length === 0) return true;
		if (memo[subTarget] !== undefined) return false;    
		for (let i = 0; i < pass.length; i++) {
			const word = pass[i];
			if (subTarget.slice(0, word.length) === word) {
				result.push(word);
				memo[subTarget] = true;
				const newTarget = subTarget.slice(word.length);
				if (backtrack(newTarget)) return true;
				result.pop();
			}
		} 
	}  
	backtrack(attempt);
	const isValid = result.join("") === attempt;
	return isValid ? result.join(" ") : "WRONG PASSWORD";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const passwords = readLine().replace(/\s+$/g, '').split(' ');

        const loginAttempt = readLine();

        const result = passwordCracker(passwords, loginAttempt);

        ws.write(result + '\n');
    }

    ws.end();
}
