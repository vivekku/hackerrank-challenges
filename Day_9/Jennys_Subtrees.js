function printSubtree(tree, ind) {
    if (!ind) ind = 0;
    let prefix = ""
    for(let i = 0; i < ind; i++) prefix += " ";
    
    for (let i = 0; i < tree.children.length; i++) {
        console.log(prefix + tree.data + " " + tree.children[i].data);
        printSubtree(tree.children[i], ind+1);
    }
}

function getTree(node, r) {
    let subtree = { data: node.data, children: [] };
    
    if (r == 0) {
        return subtree;
    }
    
    let visited = {};
    visited[node.data] = true;
    
    // format distance, 
    let stack = [];
    
    for (let i = 0; i < node.children.length; i++) {
        stack.push([node.children[i], subtree, 1]);
    }
    
    while(stack.length > 0) {
        let n = stack.splice(0,1)[0];
        
        visited[n[0].data] = true;
        
        let newNode = { data: n[0].data, children: [] };
        if (n[2] <= r) {
            n[1].children.push(newNode);
        }
        
        if (n[2] < r) {
            for (let i = 0; i < n[0].children.length; i++) {
                if (visited[n[0].children[i].data])
                    continue;
                
                stack.push([n[0].children[i], newNode, n[2]+1]);
            }
        }
    }
    
    return subtree;
}

function areIsomorphic(n1, n2) {
    if (n1.children.length == 0 && n2.children.length == 0)
        return true;
    
    if (n1.children.length != n2.children.length)
        return false;
    
    let matched2 = {};
    for (let i = n1.children.length - 1; i >= 0; i--) {
        
        let isMatch = -1;
        for (let j = n2.children.length - 1; j >= 0; j--) {
            // already used this one up
            if (matched2[n2.children[j].data])
                continue;
            
            if (areIsomorphic(n1.children[i], n2.children[j])) {
                isMatch = j;
                break;
            }
        }
        
        if (isMatch < 0)
            return false;
        
        matched2[n2.children[isMatch].data] = true;
    }
    
    return true;
}

/*
 * Complete the jennysSubtrees function below.
 */
function jennysSubtrees(n, r, edges) {
    /*
     * Write your code here.
     */
    
    let nodes = {};
    
    // build up the data structure
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        
        if (!nodes[edge[0]]) {
            nodes[edge[0]] = { data: edge[0], children: [] };
        }
        
        if (!nodes[edge[1]]) {
            nodes[edge[1]] = { data: edge[1], children: [] };
        }
        
        nodes[edge[0]].children.push(nodes[edge[1]]);
        nodes[edge[1]].children.push(nodes[edge[0]]);
    }
    
    let subTrees = [];
    
    for (let n in nodes) {
        let node = nodes[n];
        
        subTrees.push(getTree(node, r));
    }
    
    // now remove any isomorphic
    for (let i = subTrees.length - 1; i > 0; i--) {
        
        let foundAnother = false;
        let ind = -1;
        for (let j = i-1; j >= 0; j--) {
            if (areIsomorphic(subTrees[i], subTrees[j])) {
                foundAnother = true;
                ind = j;
                break;
            }
        }
        
        if (foundAnother) {
            subTrees.splice(i, 1);
        }
    }
    
    return subTrees.length;
}