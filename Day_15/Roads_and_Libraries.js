function roadsAndLibraries(n, c_lib, c_road, cities) {
	var neighbors = {};
	var vertex_list = {};
	for (var i = 1; i <= n; ++i) {
		vertex_list[i] = false;
		neighbors[i] = [];
	}
	for(var a1 = 0; a1 < cities.length; a1++){
		var city_1 = cities[a1][0];
		var city_2 = cities[a1][1];
		
		neighbors[city_1].push(city_2);
		neighbors[city_2].push(city_1);
	}
	var num_connected_components = 0;
	for(var i = 1; i <= n; ++i) {
		if(!vertex_list[i]) {
			dfs(i, vertex_list, neighbors);
			num_connected_components++;
		}
	}
	if(c_lib < c_road) {
		return(c_lib*n);
	} else {
		return(num_connected_components*(c_lib-c_road)+n*c_road);
	}
}

function dfs(vertex, vertices, neighbors) {
    if(vertices[vertex]) {
        return;
    }
    
    vertices[vertex] = true;
    var adjacent_nodes = neighbors[vertex];
    var degree = adjacent_nodes.length;
    
    for (var i = 0; i < degree; ++i) {
        var neighbor = adjacent_nodes[i];
        if(!vertices[neighbor]) {
            dfs(neighbor, vertices, neighbors);
        }
    }
}