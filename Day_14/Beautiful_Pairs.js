function beautifulPairs(A, B) {
	const MAX_NUM = 1000;
    let N = A.length;
    const bucketA = Array(MAX_NUM+1).fill(0);    
    for(let i=0; i<N;i++){        
        bucketA[A[i]]++;
    }
    let beautifulPairs = 0;
    for(let i=0; i<N;i++){
        if(bucketA[B[i]] > 0){              
            bucketA[B[i]]--;
            beautifulPairs++;                
        }
    }
    if (beautifulPairs == N) {
        beautifulPairs--;
    } else {
        beautifulPairs++;
    }
    return beautifulPairs;
}
