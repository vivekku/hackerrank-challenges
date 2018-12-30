function findMedian(arr) {
    arr.sort((a,b) => {return a-b});
    return arr[Math.floor(arr.length/2)];
}