function getNode(map, label) {
    if (map.has(label)) {
        return map.get(label);
    } else {
        let node = {
            label: label,
            connects: new Set()
        }
        map.set(label, node);
        return node;
    }
}

function cutTheTree(data, edges) {
    let map = new Map();
    let total = 0;
    for (let i = 1; i <= data.length; i++) {
        let node = getNode(map, i);
        node.data = data[i - 1];
        total += data[i - 1];
    }
    for (let i = 0; i < edges.length; i++) {
        let from = getNode(map, edges[i][0]);
        let to = getNode(map, edges[i][1]);
        from.connects.add(to);
        to.connects.add(from);
    }    
    let root = getNode(map, 1);
    let stack = [root];
    let minDiff = Number.MAX_SAFE_INTEGER;    
    while (stack.length > 0) {
        let node = stack.pop();
        if (!node.visited) {
            let children = Array.from(node.connects.values()).filter((n) => { return !n.visited; });
            node.visited = true;
            stack.push(node);
            children.forEach((c) => {
                stack.push(c);
            });
        } else if (stack.length > 0) {
            minDiff = Math.min(Math.abs((total - node.data) - node.data), minDiff);
            let i = stack.length - 1;
            while (i > 0 && !stack[i].visited) {
                i--;
            }
		if (!stack[i]) {
			console.log("stack", stack, "i", i);
		}
            stack[i].data += node.data;
        }
    }
    return minDiff;    
    let minDiffObj = {
        val: Number.MAX_SAFE_INTEGER
    };
    dfs(root, new Set(), minDiffObj, total);
    return minDiffObj.val;
}

function dfs(root, visited, minDiffObj, total) {    
    visited.add(root);
    
    let thisSum = root.data;
    root.connects.forEach((node) => {
        if (!visited.has(node)) {
            let childSum = dfs(node, visited, minDiffObj, total);
            minDiffObj.val = Math.min(Math.abs((total - childSum) - childSum), minDiffObj.val);
            thisSum += childSum;
        }
    });
    return thisSum;
}