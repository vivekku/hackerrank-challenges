function beautifulBinaryString(b) {
    var counter = 0;
    for(var i = 0; i < b.length; i++) {
        if(b.charAt(i) == '0' && b.charAt(i+1) == '1' && b.charAt(i+2) == '0') {
            counter++;
            i = i + 2;
        }
    }
    return counter;

}