function gameOfThrones(s) {
    var odd=0;
    var arr = s.split('');
    var map =  new Map();
    
    for(var i in arr) {
        if(map.get(arr[i]) == null) {
            map.set(arr[i],1)
        }
        else {
            map.set(arr[i],map.get(arr[i])+1);
        }
    }
    
    var values = map.values();
    
    for (var value of values) {
        if(value % 2 !=0){
            odd++;
        }
    }
    
 
    
    if(odd>1){
        return "NO";
    }else{
        return "YES";
    }

}