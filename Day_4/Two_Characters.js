function alternate(s) {
    var arr = [];
    for (var i = 0; i < s.length; i++){
        if (arr.indexOf(s.charAt(i)) < 0) {
            arr.push(s.charAt(i));
        }
    }
    var temp;
    var max = 0;
    for (var i = 0; i < arr.length - 1; i++){
        for (var j = i + 1; j < arr.length; j++){
            temp = "";
            for (var k = 0; k < s.length; k++){
                if (s.charAt(k) == arr[i] || s.charAt(k) == arr[j]) {
                    temp += s.charAt(k);
                }
            }
            for (k = 0; k < temp.length - 1 && temp.charAt(k) != temp.charAt(k + 1); k++);
            if (k == temp.length - 1 && max < temp.length) {
                max = temp.length;
            }
        }
    }
    return max;     
}