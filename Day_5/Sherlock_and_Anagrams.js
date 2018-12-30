function sherlockAndAnagrams(s) {
    let count = 0;
    var m = {};
    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j <= s.length; j++) {
            var str = s.substring(i,j).split('').sort().join('');
            if (str in m) {
                m[str].push(i)
            } else {
               m[str] = [i] 
            }
        }
    }
    
    for (let i in m) {
        let item = m[i].length;
        if (item > 1) {
            count += fact(item) / (fact(2) * fact(item-2));
        }
    }
    
    return count;
}
function fact(x){
    var f = 1;
    for (let j=1; j<=x; j++) {
        f *= j;
    }
    
    return f;
}