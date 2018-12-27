function designerPdfViewer(h, word) {
    var letters = word.split('');
    var word_height = [];
    for (var i = 0; i < letters.length;i++){
        switch (letters[i]) {
            case 'a': word_height[i] = h[0];
                break;
            case 'b': word_height[i] = h[1];
                break;
            case 'c': word_height[i] = h[2];
                break;
            case 'd': word_height[i] = h[3];
                break;
            case 'e': word_height[i] = h[4];
                break;
            case 'f': word_height[i] = h[5];
                break;
            case 'g': word_height[i] = h[6];
                break;
            case 'h': word_height[i] = h[7];
                break;
            case 'i': word_height[i] = h[8];
                break;
            case 'j': word_height[i] = h[9];
                break;
            case 'k': word_height[i] = h[10];
                break;
            case 'l': word_height[i] = h[11];
                break;
            case 'm': word_height[i] = h[12];
                break;
            case 'n': word_height[i] = h[13];
                break;
            case 'o': word_height[i] = h[14];
                break;
            case 'p': word_height[i] = h[15];
                break;
            case 'q': word_height[i] = h[16];
                break;
            case 'r': word_height[i] = h[17];
                break;
            case 's': word_height[i] = h[18];
                break;
            case 't': word_height[i] = h[19];
                break;
            case 'u': word_height[i] = h[20];
                break;
            case 'v': word_height[i] = h[21];
                break;
            case 'w': word_height[i] = h[22];
                break;
            case 'x': word_height[i] = h[23];
                break;
            case 'y': word_height[i] = h[24];
                break;
            case 'z': word_height[i] = h[25];
                break;
        }
    }
    return word.length * Math.max(...word_height);
}