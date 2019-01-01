function cookies(k, A) {
    A.sort(function(a, b){return a-b});
    var cnt=0, ci=0, bi=0;
    var bs=[];    
    while(A[ci]<k || bs[bi]<k) {
        if (A.length-ci + bs.length-bi < 2) {
            return -1;
        }   
        var v1, v2;
        if (ci >= A.length) {
            v1 = bs[bi];
            v2 = bs[bi+1];
            bi+=2;
        } else if(bi < bs.length) {
            if (ci < A.length-1 && A[ci+1] < bs[bi])  {
                v1 = A[ci];
                v2 = A[ci+1];
                ci+=2;
            } else {
                v1 = (A[ci] < bs[bi]) ? A[ci] : bs[bi];
                v2 = (A[ci] > bs[bi]) ? A[ci] : bs[bi];
                ci+=1;
                bi+=1;
            }    
        }
        else {
            v1 = A[ci];
            v2 = A[ci+1];
            ci+=2;
        }
        
        var nv = v1+v2*2;
        bs.push(nv);
        cnt++;
    }
    return cnt;
}