// ListedList
function Node(data) {
	this.data = data;
	this.prev = null;
	this.next = null;
}

function LinkedList(head) {
	this.head = head;
	this.tail = head;
	this.cnt  = 1;
}

LinkedList.prototype.add = function(data) {
	var node = new Node(data);
	
	node.prev = this.tail;
	this.tail.next = node;
	this.tail = node;

	this.cnt++;
}

LinkedList.prototype.pop = function() {
	this.tail = this.tail.prev;
	
	if(this.tail != null) 
		this.tail.next = null;
	else // list is empty	
		this.head = null;

	this.cnt--;
}

LinkedList.prototype.add_list = function(l) {
	l.head.prev = this.tail;
	this.tail.next = l.head;
	this.tail = l.tail;
	this.cnt += l.cnt;	
}

// Local Max
function LocalMax(n) {
	this.max = n
	this.ol = new LinkedList(new Node(n));
}

LocalMax.prototype.add = function(n) {
	this.ol.add(n);	
}

LocalMax.prototype.combine = function(ml) {
	this.ol.add_list(ml.ol);
}

LocalMax.prototype.len = function() {
	return(this.ol.cnt);
}

LocalMax.prototype.reduce = function(n) {
	while(this.ol.tail != null) {
		if(n < this.ol.tail.data)
			this.ol.pop();
		else
			break;	
	}
}

// Local Max List
function LocalMaxList() {
	this.lml = [];
}

LocalMaxList.prototype.last = function() {
	return(this.lml[this.lml.length-1]);
}

LocalMaxList.prototype.add = function(n) {
	this.lml.push(new LocalMax(n));
}

LocalMaxList.prototype.expend = function(n) {
	this.last().max = n;
	this.last().add(n);

	for(var i=this.lml.length-2; i>=0; i--) {
		if(this.lml[i].max <= n) {
			this.lml[i].max = n;
			this.lml[i].combine(this.lml[i+1])
			this.lml.pop();
		} else {
			break;
		}
	}
}

LocalMaxList.prototype.shrink= function(n) {
	for(var i=this.lml.length-1; i>=0; i--) {
		if(n < this.lml[i].max) {
			this.lml[i].reduce(n);
			if(this.lml[i].len() <= 0)
				this.lml.pop();
		} else {
			break;
		}
	}
}

LocalMaxList.prototype.construct = function(n) {
	if(this.last().max <= n) {
		this.expend(n);
	} else {
		this.shrink(n);
		this.add(n);
	}
}

function solve(arr) {
	if(arr.length == 0)
		return(0);	
	var lm_list = new LocalMaxList();
	var ans = 0;

	lm_list.add(arr[0]);
	ans++;
	
	for(var i=1; i<arr.length; i++) {
		lm_list.construct(arr[i]);
		ans += lm_list.last().len();
	}
	return ans;
}