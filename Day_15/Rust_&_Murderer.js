function rustMurderer(n, roads, s) {
    let roadsHash = {};
    roads.forEach(road => {
        roadsHash[road[0] + ',' + road[1]] = true;
        roadsHash[road[1] + ',' + road[0]] = true;
    })
    let nodes = new Set();
    for (let i = 0; i < n; i++) {
        nodes.add(i);
    }
    nodes.delete(s);
    let nodesDistance = new Array(n).fill(0);
    let depthNodes = [s];
    let distance = 0;
    while (nodes.size > 0) {
        distance++;
        let newDepthNodes = [];
        depthNodes.forEach(node => {
            for (let tnode of nodes.values()) {
                if (!roadsHash[node + ',' + tnode]) {
                    nodes.delete(tnode);
                    newDepthNodes.push(tnode);
                    nodesDistance[tnode] = distance;
                }
            }
        })
        if (newDepthNodes.length === 0) break;
        depthNodes = newDepthNodes;
    }
    nodesDistance.splice(s, 1);
    return nodesDistance;
}