function llrbtree(cmpFunc) {
	this.root = null;
	this.compareFunc = cmpFunc || function(val1, val2) {
		if(val1 == val2) { return 0; }
    	return (val1 < val2) ? -1 : 1;
	};
}
llrbtree.prototype = (function () {
    var RED = 0, BLACK = 1;
    var FLIP = {};
    FLIP[RED]   = BLACK;
    FLIP[BLACK] = RED;
    
    function NODE_CTR(val) {
        this.val = val;
        this.left = this.right = null;
        this.count = 1;
        this.color = RED;
    }  
    function ins(node, val, cmpFunc) {
    	if (node == null) { return new NODE_CTR(val); }
    	
    	if(isRed(node.left) && isRed(node.right)) { colorFlip(node); }
    	
    	var cmp = cmpFunc(val, node.val);
    	if(cmp == 0)     { node.val = val }
    	else if(cmp < 0) { node.left = ins(node.left, val, cmpFunc); }
    	else             { node.right = ins(node.right, val, cmpFunc); }
    	
    	updateCount(node);
    	
    	if(isRed(node.right) && !isRed(node.left)) { node = rotateLeft(node); }
    	if(isRed(node.left) && isRed(node.left.left)) { node = rotateRight(node); }
    	return node;
    }
    function colorFlip(h) {
    	h.color = FLIP[h.color];
    	h.left.color = FLIP[h.left.color];
    	h.right.color = FLIP[h.right.color];
    }
    function rotateLeft(h) {
    	var x = h.right;
    	h.right = x.left;
    	x.left = h;
    	
    	x.color = h.color;
    	h.color = RED;
    	
    	updateCount(h);
    	updateCount(x);
    	    	
    	return x;
    }
    function rotateRight(h) {
    	var x = h.left;
    	h.left = x.right;
    	x.right = h;
    	
    	x.color = h.color;
    	h.color = RED;
    	
    	updateCount(h);
    	updateCount(x);
    	
    	return x;
    }
    function isRed(node) {
    	return (node != null) && (node.color == RED);
    }
    
    function getCount(node) {
    	return (node == null) ? 0 : node.count;
    }
    function updateCount(node) {
    	node.count = 1 + getCount(node.left) + getCount(node.right);
    }
    
    
    function insert(val) {
    	this.root = ins(this.root, val, this.compareFunc);
    	this.root.color = BLACK;
    }
    function rank(val) {
    	var cmpFunc = this.compareFunc;
    	var _rank = function(node, val) {
        	if(node == null) { return 0; }
    	    
    	    var cmp = cmpFunc(val, node.val);
        	if(cmp == 0)     { return 1 + getCount(node.left); }
        	else if(cmp < 0) { return _rank(node.left, val); }
    	    else             { return 1 + getCount(node.left) + _rank(node.right, val); }
        }        
    	return _rank(this.root, val);
    }
    function inorder(func) {
    	var _inorder = function(node) {
    		if(node == null) { return; }
    		_inorder(node.left);
    		if(func) {
    			func(node);
    		}
    		_inorder(node.right);
    	};
    	_inorder(this.root);
    }
    function height() {
    	var _height = function(node) {
    		if(node == null) { return 0; }
    		return 1 + Math.max(_height(node.left), _height(node.right));
    	};
    	return _height(this.root);
    }
    return {
        insert: insert,
        rank: rank,
        inorder: inorder,
        height: height
    };
})();

function findNumOfTriplets(arr) {
	var i, tmpArr, len = arr.length;
	var ascendingTree = new llrbtree();
	var descendingTree = new llrbtree(function(val1, val2) {
		if(val1 == val2) { return 0; }
    	return (val1 > val2) ? -1 : 1;
	});
	var minThanCurrent = [];
	var maxThanCurrent = [];
	var duplicates = {};
	var total = 0;
	
	for(i = 0; i < len; i++) {
		ascendingTree.insert(arr[i]);
		minThanCurrent[i] = ascendingTree.rank(arr[i] - 1);
	}
	
	for(i = len - 1; i >= 0; i--) {
		descendingTree.insert(arr[i]);
		maxThanCurrent[i] = descendingTree.rank(arr[i] + 1);
	}
	
	for(i = 0; i < len; i++) {
		if (duplicates[arr[i]]) {
			duplicates[arr[i]].push(i);
		} else {
			duplicates[arr[i]] = [i];
		}
	}
	
	for(i = 0; i < len; i++) {
		total += (minThanCurrent[i] * maxThanCurrent[i]);
	}
	for(i in duplicates) {
		tmpArr = duplicates[i];
		if(tmpArr && tmpArr.length == 2) {
			total -= (minThanCurrent[tmpArr[0]] * maxThanCurrent[tmpArr[1]]);
		}
	}
	return total;
}

function processData(input) {
    var arr = input.split('\n')[1].split(' ').map(function(e){return parseInt(e, 10);});
    console.log(findNumOfTriplets(arr));
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
