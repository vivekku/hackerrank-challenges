function theLoveLetterMystery(s) {
    let half = Math.floor(s.length/2);
    let diff = 0
    for(let i=0; i<half; i++){
        diff += Math.abs(s.charCodeAt(i)- s.charCodeAt(s.length-i-1))
    }
    return diff;

}