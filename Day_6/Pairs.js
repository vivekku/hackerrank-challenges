function pairs(k, arr) {
arr.sort((a,b) => {return a-b });
    let i = 0, j = 1; 
    let count = 0;
    let size = arr.length;
    // Search for a pair 
    while(i < size && j < size){ 
        if (i != j && arr[j]-arr[i] == k) { 
            count++;
            j++;
        } 
        else if(arr[j] - arr[i] < k){ 
            j++;
        }
        else{
            i++;
        }
    } 
    return count;

}