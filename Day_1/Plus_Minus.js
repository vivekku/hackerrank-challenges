function plusMinus(arr) {
    var size = arr.length;
    var plus = 0, minus = 0, zero = 0;
    for (var i = 0; i < size; i++) {
        if (arr[i] == 0)
            zero++;
        else if (arr[i] > 0)
            plus++;
        else
            minus++;
    }
    console.log(plus / size);
    console.log(minus / size);
    console.log(zero / size);
}