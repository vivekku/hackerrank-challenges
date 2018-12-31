function superFunctionalStrings(s) {
    
    var i,j;
    var str_list = [];
    var s_str = "";
    for (i = 0; i < s.length; i++) { 
        for (j = i+1; j < s.length+1; j++){
            s_str = s.substring(i,j);
            if(str_list.indexOf(s_str) == -1){
                str_list.push(s_str);
            }
        }
    }
    var chr_list;
    var sum = 0;
    console.log("---------------------------------");
    for (i = 0; i < str_list.length; i++) {
        chr_list = [];
        if(str_list[i] ==  ""){
            continue;
        }
        for (j = 0; j < str_list[i].length; j++){
            if(str_list[i][j] == ''){
                continue;
            }
            if(chr_list.indexOf(str_list[i][j]) == -1){
                chr_list.push(str_list[i][j]);
            }
        }
        console.log(str_list[i]+ "  " + (findPow(str_list[i].length,chr_list.length)));
        console.log(str_list[i].length + " " +chr_list.length);
        sum =(sum+ (findPow(str_list[i].length,chr_list.length))) % (Math.pow(10,9)+7)
    }
    
    return sum;
}
function findPow(a,b){
    var i;
    var result = 1;
    for (i = 0; i < b; i++) {
        result = (result *a)%(Math.pow(10,9)+7)
    }
    return result;
}