function alternatingCharacters(s) {
   var len=s.length;
    var count=0;

    for(var i=1;i<len;i++){
        if(s.charAt(i)==s.charAt(i-1))
            count++;
    }
    return count;

}