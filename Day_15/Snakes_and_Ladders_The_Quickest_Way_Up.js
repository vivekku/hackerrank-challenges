function quickestWayUp(ladders, snakes) {
    const visitedMap = Array(100);
    const teleportMap = new Map();
    ladders.forEach((d) => {
        teleportMap.set(d[0] - 1, d[1] - 1);
    });
    snakes.forEach((d) => {
        teleportMap.set(d[0] - 1, d[1] - 1);
    });

    const queue = [{
        idx: 0, count: 0,
    }];
    visitedMap[0] = true;
    while (queue.length > 0) {
        const node = queue.shift();
        if (node.idx === 99) {
            return node.count;
        }
        for (let i = 1; i <= 6; i++) {
            let nextIdx = node.idx + i;
            if (teleportMap.has(nextIdx)) {
                nextIdx = teleportMap.get(nextIdx);
            }
            if (!visitedMap[nextIdx]) {
                queue.push({
                    idx: nextIdx,
                    count: node.count + 1,
                });
                visitedMap[nextIdx] = true;
            }
        }
    }
    return -1;
}