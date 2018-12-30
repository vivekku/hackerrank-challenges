function funnyString(s) { 
    let sReverse = s.split('').reverse().join('');
    let count =0
    for(let i=0; i<sReverse.length-1; i++){
        let reverseDiff = Math.abs(sReverse.charCodeAt(i+1)-sReverse.charCodeAt(i));
        let sDiff = Math.abs(s.charCodeAt(i+1)-s.charCodeAt(i))
        if(reverseDiff === sDiff){
            count++
        }
    }
    return count === s.length-1 ?'Funny': 'Not Funny'
}