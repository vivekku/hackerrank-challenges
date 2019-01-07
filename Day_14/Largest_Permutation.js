function largestPermutation(k, arr) {
    var index = [], n = arr.length;
	for (let ind in arr) {
        index[arr[ind]] = ind;
    }
    for (let i = 0; i < n && k > 0; i++) {
        if (arr[i] === n - i) {
            continue;
        }
        arr[index[n - i]] = arr[i];
        index[arr[i]] = index[n - i];
        arr[i] = n - i;
        index[n - i] = i;
        k--;
    }
	return arr;
}