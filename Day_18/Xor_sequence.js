function xorSequence(l, r) {
    var arr1 =[], arr2 =[], arr3 =[];
    for(var i=0;i< 60; i++) {
        arr1[i] = 0;
        arr2[i] = 0;
        arr3[i] = 0;
    }    
    var size;    
    var x = magic(l-1);
    size =0;
    while(x > 0) {
        arr1[size++] = (x%2);
        x = Math.floor(x/2);
    }
    var y = magic(r);
    size =0;
    while(y > 0) {
        arr2[size++]=(y%2);
        y = Math.floor(y/2);
    }    
    for(var i=59;i >=0; i--) {
        arr3[i] = arr2[59-i]^arr1[59-i];
    }
    arr3 = arr3.map(x => x.toString());    
    return parseInt(arr3.join(""),2)
}

function magic(x) {    
    if(x%2 == 0) {
        var divisor = Math.floor(x/4);
        var rem = x%4;
        if(divisor%2 == 0 && rem == 0) {
            return x;
        } else if(divisor%2 == 0 && rem == 2) {
            return 2;
        } else if(divisor%2 == 1 && rem == 0) {
            return x+2;
        } else {
            return 0;
        }
    } else {
        var divisor = Math.floor(x/4);
        var rem = x%4;
        if(divisor%2 == 0 && rem == 1) {
            return x
        } else if(divisor%2 == 0 && rem == 3) {
            return 2;
        } else if(divisor%2 == 1 && rem == 1) {
            return x+2;
        } else {
            return 0;
        }
    }
}