function componentsInGraph(gb) {
	
	var bfs = function(v, all_pairs, visited){ 
		var q = [], current_group = [], i, nextVertex, pair, length_all_pairs = all_pairs.length; 
		q.push(v);
		while (q.length > 0) { 
			v = q.shift(); 
			if (!visited[v]) { 
				visited[v] = true; 
				current_group.push(v); 
				for (i = 0; i < length_all_pairs; i += 1) {
					pair = all_pairs[i];
					if (pair[0] === v && !visited[pair[1]]) {
						q.push(pair[1]);
					} else if (pair[1] === v && !visited[pair[0]]) {
						q.push(pair[0]); 
					} 
				} 
			} 
		} return current_group; 
	};

    var groups = [];
    var i, k, length, u, v, src, current_pair;
    var visited = {};
    for (i = 0, length = gb.length; i < length; i += 1) {
      current_pair = gb[i];
      u = current_pair[0];
      v = current_pair[1];
      src = null;
      if (!visited[u]) {
        src = u;
      } else if (!visited[v]) {
        src = v;
      }
      if (src) {
        groups.push(bfs(src, gb, visited));
      }
    }    
    var g = groups.map(function(x) {
        return x.length;
    })
	var res = [];
	res.push(Math.min.apply(null,g)), res.push(Math.max.apply(null,g));
	return res;
}