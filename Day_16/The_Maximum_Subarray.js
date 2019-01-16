function maxSubarray(arr) {
	let table = new Array(arr.length), table1 = new Array(arr.length);
    table[arr.length - 1] = arr[arr.length - 1], table1[arr.length - 1] = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        table[i] = Math.max(arr[i], arr[i] + table[i + 1]);
        table1[i] = Math.max(arr[i], arr[i] + table1[i + 1], table1[i + 1]);
    }
    let max1 = Math.max.apply(this, table), max2 = table1[0]; 
    return [max1, max2];
}