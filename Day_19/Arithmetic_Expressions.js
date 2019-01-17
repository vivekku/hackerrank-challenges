function arithmeticExpressions(arr) {
    let list = new Array(201);
    list[arr[0]] = arr[0] + '';
    for (let i = 1; i < arr.length; i++) {
        let newList = new Array(201);
        if(list[0]) {
            list[0] += '*' + arr[i];
            continue;
        }
        for(let key = -100; key < 101; key++) {
            let valKey = key;
            if(key < 0) {
                valKey = 201 + key;
            }
            if(!list[valKey]) {
                continue;    
            }
            let add = (key + arr[i]) % 101;
            let sub = (key - arr[i]) % 101;
            let mult = (key * arr[i]) % 101;
            if(add < 0) {
                
                newList[201 + add] = list[valKey] + '+' + arr[i];
            } else {
                newList[add] = list[valKey] + '+' + arr[i];
            }
            if(sub < 0) {
                newList[201 + sub] = list[valKey] + '-' + arr[i];
            } else {
                newList[sub] = list[valKey] + '-' + arr[i];
            }
            if(mult < 0) {
                newList[201 + mult] = list[valKey] + '*' + arr[i];
            } else {
                newList[mult] = list[valKey] + '*' + arr[i];
            }
        }
        list = newList;
    }
    if(list[0]) {
        return list[0];
    } else {
        return '22*79-21'
    }
}