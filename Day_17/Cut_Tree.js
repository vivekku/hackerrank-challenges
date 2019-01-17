function processData(input) {  
	var inputList = input.split('\n');  
	var index = 0;  
	var infoList = inputList[index++];
	var k = parseInt(infoList.split(' ')[1]);
	var numNodes = parseInt(infoList.split(' ')[0]);
	var graph = {
		nodeList: [],
		edgeList: []
	}
	for(var j = 0; j < numNodes; j++) {
		graph.nodeList[j] = [];
		for(var i =0; i < numNodes; i++) {
		 graph.nodeList[j][i] = -1;
		}
	}

	for(var curEdge = 0; curEdge < numNodes-1; curEdge++) {
		var edge = inputList[index++].split(' ');
		edge[0] = parseInt(edge[0])-1; 
		edge[1] = parseInt(edge[1])-1; 
		graph.nodeList[edge[0]][edge[1]] = 1;
		graph.nodeList[edge[1]][edge[0]] = 1;
		graph.edgeList.push({from:edge[0], to:edge[1]});
	}
	console.log(cutTree(graph, k));
} 

function cutTree(graph, k) {
	var count = 2;
	var numNodes = graph.nodeList.length;  
	for(var i = 1; i < (Math.pow(2,numNodes)/2); i++) {
		var inNodeMap = getNodeMap(i, numNodes);
		var outNodeMap = getNodeMap(~i, numNodes);
		var egdesBetweenTrees = countEdgesBetweenGraphs(graph, inNodeMap, outNodeMap);
		if(egdesBetweenTrees > k)
		  continue;
		if(isFullyConnected(graph, inNodeMap))  {
		  count++;
		}

		if(isFullyConnected(graph, outNodeMap)) {
		  count++;
		}    
	}  
	return count;
}

function countEdgesBetweenGraphs(graph, inNodeMap, outNodeMap) {  
	var count = 0;  
	for(var i = 0; i < graph.edgeList.length; i++) {
		var edge = graph.edgeList[i];
		if((outNodeMap[edge.from] && inNodeMap[edge.to]) || (outNodeMap[edge.to] && inNodeMap[edge.from]))
		  count++;
	}  
	return count;
}

function getNodeMap(partition, maxNodes) {  
	var retMap = {};  
	for(var i = 0; i < maxNodes; i++) {    
		var mask = Math.pow(2, i);    
		if((partition & mask) === mask)
		  retMap[i] = true;
	}  
	return retMap;
}

function isFullyConnected(graph, nodeMap) {  
	var nodeList = Object.keys(nodeMap);  
	nodeList.forEach(function(val, index) {
		nodeList[index] = parseInt(val);
	});  
	if(nodeList.length <= 1)
	return true;
	var nodesToVisit = [nodeList[0]];
	var visitedNodes = {};
	var visitedNodesList = [];  
	while(nodesToVisit.length > 0) {    
		var curNode = nodesToVisit.pop();    
		visitedNodes[curNode] = true;    
		var edgeList = graph.nodeList[curNode];
		edgeList.forEach(function(value, destNode){      
		  if(value === -1)
			return;      
		  if(visitedNodes[destNode] || !nodeMap[destNode])
			return;
		  nodesToVisit.push(destNode);      
		});    
	}  
	var fullyConnected = true;  
	for(var node in nodeMap) {
		if(!visitedNodes[node]) {
		  fullyConnected = false;
		  break;
		}
	}  
	return fullyConnected;
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
