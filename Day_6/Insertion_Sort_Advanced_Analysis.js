function merge(arr, left, right) {
    var i = 0, j = 0, count = 0, leftLength = left.length, rightLength = right.length;
    while(i < leftLength || j < rightLength) {
        if(i === leftLength) {
            arr[i + j] = right[j];
            j++;
        } else if (j === rightLength) {
            arr[i + j] = left[i];
            i++;
        } else if(left[i] <= right[j]) {
            arr[i + j] = left [i];
            i++;
        } else {
            arr[i + j] = right [j];
            count += leftLength - i;
            j++;
        }
    }
    return count;
}
function insertionSort(arr) {
    var length = arr.length
    if(length < 2){
        return 0;  
    }    
    var middle = (length + 1) / 2;
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, length);
    return insertionSort(left) + insertionSort(right) + merge(arr, left, right);
}