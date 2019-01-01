function solveProblem(a, n) {
    let b = [];
    function initialize() {
        for (var i = 0; i < n; i++) {
            a[i]--;
        }
        for (i = 0; i < Math.pow(4, n); i++) {
            b[i] = -1;
        }
    }

    function convertStateToNumber(arr) {
        let value = 0;
        for (var i = 0; i < n; i++) {
            value = value | (arr[i] << (2 * i));
        }
        return value;
    }

    function convertNumberToState(num) {
        let arr2 = [];
        for (var i = 0; i < n; i++) {
            arr2[i] = num & 3;
            num = num >> 2;
        }
        return arr2;
    }

    function getTopDiskInRod(tempArr) {
        let top2 = [];
        for (let j = 0; j < 4; j++) {
            top2[j] = n;
        }
        for (let j = n - 1; j >= 0; j--) {
            top2[tempArr[j]] = j;
        }
        return top2;
    }
	
    function findSolution() {
        let num = convertStateToNumber(a);
        let queue = [num];
        let arr;
        b[num] = 0;
        let count = 1, idx = 0;
        while (idx < count) {
            num = queue[idx];
            idx++;
            if (num == 0) return b[num];
            arr = convertNumberToState(num);
            let top = getTopDiskInRod(arr);
            for (var i = 0; i < 4; i++) {
                if (top[i] < n) {
                    for (var j = 0; j < 4; j++) {
                        if (top[i] < top[j]) {
                            let newArr = arr.slice();
                            newArr[top[i]] = j;
                            let newNum = convertStateToNumber(newArr);
                            if (b[newNum] == -1) {
                                queue[count] = newNum;
                                count++;
                                b[newNum] = b[num] + 1;
                            }
                        }
                    }
                }
            }
        }
    }
    initialize();
    return (findSolution());
}

function main() {
    const N = parseInt(readLine(), 10);
    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));    
    console.log(solveProblem(a, N));
}