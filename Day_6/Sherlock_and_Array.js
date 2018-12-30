function balancedSums(arr) {
 if(arr.length == 1) {
        return "YES";
    }
    let lSum = 0;
    let rSum = 0;
    for(let i=1; i<arr.length; i++) {
        rSum += arr[i];
    }
    for(let i=0; i<arr.length; i++) {
        if(lSum == rSum) {
            return "YES";
        } else if(i!=arr.length-1){
            lSum = lSum+arr[i];
            rSum = rSum-arr[i+1];
        } else {
            lSum = lSum+arr[i];
        }
    }
    return "NO";

}