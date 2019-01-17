function calculateScore(arr, sum) {    
    if (sum === 0) {
        return Math.max(arr.length - 1, 0);
    }    
    let score = 0, lastIndex = arr.length - 1, rightArrLength = 1, rightSum = 0;
    while (lastIndex > 0) {
        rightSum += arr[lastIndex];
        const leftSum = sum - rightSum;        
        if (leftSum === rightSum) {
            score++;
            const leftArr = arr.slice(0,lastIndex);
            const rightArr = arr.slice(lastIndex, lastIndex + rightArrLength);
            const scoreFromRightSubArray = calculateScore(rightArr, rightSum);
            const scoreFromLeftSubArray = calculateScore(leftArr, leftSum);
            score += Math.max(scoreFromLeftSubArray, scoreFromRightSubArray);
            break;
        } else if (leftSum > rightSum) {
            lastIndex--;
            rightArrLength++;
        } else {
            return score;
        }
    }     
    return score;
}

function arraySplitting(arr) { 
    return calculateScore(arr, arr.reduce((a, b) => a + b));    
}