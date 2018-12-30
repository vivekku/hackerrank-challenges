function morganAndString(s1, s2) {
    s1 += "z";
    s2 += "z";
    var Out = "";
    while (true) {
        if (!s1) {
            Out += s2;
            break;
        }
        if (!s2){
            Out += s1;
            break;
        }
        if (s1 <= s2) {
            Out += s1[0];
            s1 = s1.substring(1);
            continue;
        }
        Out += s2[0];
        s2 = s2.substring(1);
    }
    return Out.slice(0,-2);
}