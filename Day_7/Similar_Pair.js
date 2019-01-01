class Node {
    constructor(id, n) {
        this.id = id;
        this.parentNode = null;
        this.countChildren = 0;
        this.processed = false;
    }
}
let _ = require('lodash');
function similarPair(n, k, edges) {
	
	function buildNodes(n, edges) {
		let nodes = new Array(n);
		for (let i = 0; i < n; i++) {
			nodes[i] = new Node(i + 1, edges);
		}
		edges.forEach(function (x) {
			let [parentId, childId] = x;
			let pNode = nodes[parentId - 1];
			let cNode = nodes[childId - 1];
			cNode.parentNode = pNode;
			pNode.countChildren++;
		});
		return nodes;
	}
	
	var nodes = buildNodes(n, edges);
	let solutions = 0;
	let leaves = nodes.filter(x => x.countChildren == 0 && !x.processed);
	while (leaves.length > 1) {
		for (let leaf of leaves) {
			let currentNode = leaf;
			if(leaf.parentNode == null) {
				leaf.processed = true;
				continue;
			}
			let parent = currentNode.parentNode;
			while (parent !== null) {
				let delta = currentNode.id - parent.id;
				if (Math.abs(delta) <= k ) {
					solutions++;
				}
				parent = parent.parentNode;
			}
			leaf.processed = true;
			leaf.parentNode.countChildren--;
		}
		leaves = nodes.filter(x => x.countChildren == 0 && !x.processed);
		if (leaves.length <= 1) {
			let lastStrand = nodes.filter(x => !x.processed).map(x=>x.id);
			let searchStartIndex = 1;
			for (let i = 0; i < lastStrand.length; i++) {
				let startValue = lastStrand[i];
				let indexOfBiggerValue = _.findIndex(lastStrand, x => x > startValue + k, searchStartIndex);
				searchStartIndex = indexOfBiggerValue !== -1 ? indexOfBiggerValue : lastStrand.length;
				solutions += searchStartIndex - i - 1;
			}
		}
	}
	return solutions;
}