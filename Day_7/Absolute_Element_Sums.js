function sortNums(a, b) {
  return a - b;
}

function createResponder(nums) {
    var pNums = nums.filter(function(n) {return n > 0}).sort(sortNums);
    var nNums = nums.filter(function(n) {return n <= 0}).map(function(n) { return Math.abs(n)}).sort(sortNums);

    function mapSums(sumArr, n, i, arr) {
    sumArr.push(n + (sumArr.length ? sumArr[i-1] : 0));
    return sumArr;
    }

    var pSums = pNums.reduce(mapSums, []); 
    var nSums = nNums.reduce(mapSums, []);
    var total = pSums.length ? pSums[pSums.length -1] : 0;
    total += nSums.length ? nSums[nSums.length -1] : 0;
    return function(q) {
    var sum = total, absQ = Math.abs(q);    
    var oSums = q < 0 ? pSums : nSums;
    sum += (q >= 0 ? pSums : nSums).length * absQ;
    var index = binarySearch(absQ, q < 0 ? pNums : nNums);
    if (index > 0)
      sum += (absQ * index - 2 * oSums[index - 1]);
    return sum - (absQ * (oSums.length - index)); };
}

function binarySearch(target, arr) {
	function innerSearch(start, end) {
		if (start > end) 
			return start;
		var mid = start + Math.round((end - start) / 2);
		if (target > arr[mid]) 
			return innerSearch(mid + 1, end);
		if (target <= arr[mid]) 
			return innerSearch(start, mid - 1);
	}
	return innerSearch(0, arr.length - 1);
}

function main() {
    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const q = parseInt(readLine(), 10);
    const queries = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    var getSum = createResponder(arr);
	queries.reduce(function(sum, n) { var newSum = sum + n; console.log(getSum(newSum)); return newSum; }, 0);
}