'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const nc = readLine().split(' ');

    const n = parseInt(nc[0], 10);

    const c = parseInt(nc[1], 10);

    let points = Array(n);

    for (let i = 0; i < n; i++) {
        points[i] = readLine().split(' ').map(pointsTemp => parseInt(pointsTemp, 10));
    }
    const best_dist = function( a, b ) {
		const diff = Math.abs( a - b ) ;
		const c_diff = c - diff ;
		const [small, large] =  diff < c_diff ? [ diff, c_diff ] : [ c_diff, diff ] ;
		const best = Math.floor( Math.max(small / 2 , Math.min( small, large / 3) ) ) ;
		return best; } ;
	const pair_dist = function( a, b ) {
		const diff = Math.abs( a - b ) ;
		const c_diff = c - diff ;
		return Math.min( diff, c_diff ); } ;
	const dists = points.map( pair => ( { d: best_dist( ...pair ), pair } ) ) ;
	dists.sort( ( a, b ) => b.d - a.d )  ;
	let max_dist = 0 ;
	for( let i = 0 ; i < n-1 ; i++ ) {
		const pi = dists[i] ;
		if( pi.d <= max_dist ) { break ; }
		for( let j = i+1 ; j < n ; j++ ) {
			const pj = dists[j] ;
			if( pj.d <= max_dist ) { break ; }
			const [ ai, bi ] = pi.pair ;
			const [ aj, bj ] = pj.pair ;
			const dist = Math.min(
				pair_dist( ai, aj ),
				pair_dist( bi, bj ),
				pair_dist( ai, bj ),
				pair_dist( aj, bi ),
				pair_dist( ai, bi ),
				pair_dist( aj, bj )) ;
			if( dist > max_dist ) {
				max_dist = dist ;
			}
		}
	}
	console.log( max_dist ) ;
}
