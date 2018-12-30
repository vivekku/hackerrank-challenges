function insertionSort1(n, arr) {

    for (let i = 1; i < n; i++) { 
        let key = arr[i]; 
        let j = i-1; 
        while (j >= 0 && arr[j] > key) { 
            arr[j+1] = arr[j]; 
            j = j-1; 
            console.log(...arr);
        } 
        arr[j+1] = key;      
    }
    console.log(...arr);
}