function gemstones(arr) {

var count=0;
  for(let i=97; i<=122; i++) {
        let flag = true;
        for(let j=0; j<arr.length; j++) {
            if(!arr[j].includes(String.fromCharCode(i))) {
                flag = false;
            }
        }
        
        if(flag) {
            count++;
        }
    }
    return count;
}