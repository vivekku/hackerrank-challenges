function twoTwo(a) {
    let i,j,t='1',r=0,n=801;
    for(i=1;i<=n && t.length <= a.length;i++) {
        j=a.indexOf(t);
        while(j>-1) {
            r++;
            j = a.indexOf(t,j+1);
        }
        t=next2(t);
    }
    return r;

    function next2(a) {
        let v='',i,n=a.length,s,c=0;
        for(i=n-1;i>=0;i--) {
            s = (a.charAt(i)-0)*2+c;
            v = (s%10) + v;
            c = Math.floor(s/10);
        }
        if (c>0) v=c+v;
        return v;
    }    
}