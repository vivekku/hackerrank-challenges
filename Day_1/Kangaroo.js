function kangaroo(x1, v1, x2, v2) {
    if (x1 > x2 && v1 > v2 || x2 > x1 && v2 > v1){
        return "NO";
    }
    else if (((x1 - x2) % (v2 - v1)) == 0 || ((x2 - x1) % (v1 - v2)) == 0) {
        return "YES";
    }
    else {
        return "NO";
    }
}