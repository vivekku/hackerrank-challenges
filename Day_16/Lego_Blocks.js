const devider = 1000000007;

function add(a, b) {
    const result = a + b;
    return result % devider;
}

function subtract(a, b) {
    let result = a - b;
    while (result < 0) {
        result += devider;
    }
    return result;
}

function multiply(a, b) {
    const a1 = a >> 15 << 15;
    const a2 = a << 17 >>> 17;
    const b1 = b >> 15 << 15;
    const b2 = b << 17 >>> 17;
    if (a1 + a2 !== a || b1 + b2 !== b) {
        console.log(a1 + a2, a, b1 + b2, b);
    }
    const res = a1 * b1 % devider + a1 * b2 % devider + a2 * b1 % devider + a2 * b2 % devider;

    return res % devider;
}

function pow(base, exponent) {
    const cache = {};
    cache[1] = base;
    let i;
    const keys = [1];
    for (i = 2; i <= exponent; i *= 2) {
        keys.unshift(i);
        const prev = cache[i / 2];
        cache[i] = multiply(prev, prev);
    }
    let result = cache[i / 2];
    if (i / 2 < exponent) {
        let left = exponent - i / 2;
        for (const key of keys) {
            if (left >= key) {
                left -= key;
                result = multiply(result, cache[key]);
            };
        }
    } 
    return result;
}

const sizez = [1, 2, 3, 4];

function calculateCombinations(width) {
    const combinations = Array(width + 1); //initial populating
    for (let i = 0; i <= width; i++) {
        combinations[i] = 0;

    }

    for (let i = 1; i <= width; i++) {
        for (let s of sizez) {
            const suitableSize = i - s;
            if (i - s === 0) {
                combinations[i] = add(combinations[i], 1);
            }
            else if (combinations[suitableSize]) {
                const suibatleCombinations = combinations[suitableSize];
                combinations[i] = add(combinations[i], suibatleCombinations);
            } 
        }
    }
    return combinations;
}

function calculateWalls2(rowCombinations, height, width) {
    const rowCombinationsPowd = [0];
    for (let i = 1; i < rowCombinations.length; i++) {
        rowCombinationsPowd.push(pow(rowCombinations[i], height));
    }

    let result = rowCombinationsPowd[width];

    const unbrokenWals = [];

    unbrokenWals.push(0);
    for (let i = 1; i < width; i++) {
        let unbrokenWallQuantity = rowCombinationsPowd[i];

        for (let c = 1; c < i; c++) {
            const broken = multiply(rowCombinationsPowd[i - c], unbrokenWals[c])
            unbrokenWallQuantity = subtract(unbrokenWallQuantity, broken);
        }
        
        unbrokenWals.push(unbrokenWallQuantity);
        const q = multiply(unbrokenWallQuantity, rowCombinationsPowd[width - i]);
        result = subtract(result, q);
    }
    return result
}
 
function legoBlocks(n, m) {
    const rowCombinations = calculateCombinations(m);
    return calculateWalls2(rowCombinations, n, m);
}