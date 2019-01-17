function bonetrousle(n, k, b) {
    const min = b.times(b.plus(1)).div(2);
    const max = b.times(k.times(2).minus(b).plus(1)).div(2);
    if (min.gt(n) || n.gt(max)) return [-1];
    const offset = (n.minus(min)).idiv(b);
    const r = (n.minus(min)).mod(b);
    let boxes = [];
    for (let box = new BigNumber(1); box.lte(b); box = box.plus(1)) {
        let finalBox = box.plus(offset);
        if (b.minus(box).lt(r)) finalBox = finalBox.plus(1)
        boxes.push(finalBox.toString());
    }
    return boxes;
}