function cipher(k, s) {
    let activeBit = parseInt(s.charAt(0));
    let decoded = [s.charAt(0)];
    for(let i = 1; i < s.length - k + 1; i++) {
        if(i >= k) {
            let removeBit = decoded[i - k];
            activeBit = activeBit ^ removeBit;
        }
        let cipherBit = s.charAt(i);
        let plainBit;
        if(cipherBit != activeBit) {
            plainBit = 1;
        } else {
            plainBit = 0;
        }
        activeBit = activeBit ^ plainBit;
        decoded.push(plainBit);
    }
    return decoded.join('');
}