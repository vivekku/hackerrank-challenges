function countingSort(arr) {
    let counts = Array(100).fill(0);
    arr.forEach(item => {++counts[item];});
    var s=[];
    //adding values to s according to their freq.
    for(let i=0;i<100;i++){
        for(let j=0;j<counts[i];j++){
            s.push(i);
        }
    }
    return s;
}