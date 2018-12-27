function catAndMouse(x, y, z) {
    if (Math.abs(z - x) == Math.abs(z - y)) {
        return "Mouse C";
    } else if (Math.abs(z - x) < Math.abs(z - y)) {
        return "Cat A";
    } else {
        return "Cat B";
    }
}