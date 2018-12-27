function miniMaxSum(arr) {
    arr.sort(function (a, b) { return a - b; });
    var min = arr[0] + arr[1] + arr[2] + arr[3];
    var max = arr[1] + arr[2] + arr[3] + arr[4];
    console.log(min + " " + max);
}