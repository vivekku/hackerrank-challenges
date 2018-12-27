function equalizeArray(arr) {
    var f = new Array(Math.max(...arr) + 1).fill(0);
    for (var i = 0; i < arr.length; i++){
        f[arr[i]]++;
    }
    var num = f.indexOf(Math.max(...f)), count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != num) {
            count++;
        }
    }
    return count;
}