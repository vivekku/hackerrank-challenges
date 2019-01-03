function solve(arr) {	
	function Stack() {
		this.st = [];
		this.empty = function() {
			return this.st.length == 0;
		};
		this.topHeight = function() {
			return this.st[this.st.length - 1].height;
		};
		this.topCount = function() {
			return this.st[this.st.length - 1].count;
		};
		this.pop = function() {
			this.st.pop();
		};
		this.addCount = function() {
			++this.st[this.st.length - 1].count;
		};
		this.push = function(height) {
			this.st.push({height: height, count: 1});
		};
	}
    arr.push("" + (1000 * 1000 * 1000));
    var stack = new Stack();
    var current;
    var res = 0;
    for (var i = 0; i < arr.length+1; ++i) {
        current = parseInt(arr[i]);
        while (!stack.empty() && stack.topHeight() < current) {
            res += stack.topCount() * (stack.topCount() - 1);
            stack.pop();
        }
        if (!stack.empty() && stack.topHeight() == current) {
            stack.addCount();
        } else {
            stack.push(current)
        }        
    }
    return res;
}