function unboundedKnapsack(k, arr) {
	let cache = {};
    let bigger = arr[0] <= k ? arr[0] : 0;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        cache[num] = true;
        if (num > bigger && num <= k) {
            bigger = num;
        }
        for (let j in cache) {
            let val = parseInt(j);
            let sum = val + num;
            while (sum <= k) {
                if (sum === k) {
                    return sum;
                }
                if (!cache[sum]) {
                    cache[sum] = true;
                    if (sum > bigger) {
                        bigger = sum;
                    }
                }
                sum += num;
            }
        }
    }
    return bigger;
}