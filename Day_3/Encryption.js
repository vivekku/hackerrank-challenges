function encryption(s) {
    var row = Math.floor(Math.sqrt(s.length));
    var col = Math.ceil(Math.sqrt(s.length));
    if (row * col < s.length) {
        (row < col) ? row++ : col++;
    }
    var string = s.split(''), encrypt = "";
    for (var i = 0; i < col; i++){
        for (var j = i; j < string.length; j += col) {
            encrypt += string[j];
        }
        encrypt += " ";
    }
    return encrypt;
}