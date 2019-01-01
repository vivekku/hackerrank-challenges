function printShortestPath(n, i_start, j_start, i_end, j_end) {	

	function r(x1, y1, x2, y2, path) {
		if (y1 != y2 && Math.abs(y1 - y2) % 2 != 0) {
			return [];
		}
		else if (Math.abs(x1 - x2) % 2 != 0 && y1 == y2) {
			return [];
		}
		if (y1 - y2 > 0) {
			if (x1 - x2 >= 0) {
				path.push('UL');
				return r(x1 - 1, y1 - 2, x2, y2, path);
			}
			else {
				path.push('UR');
				return r(x1 + 1, y1 - 2, x2, y2, path);
			}
		} else if (y2 - y1 > 0) {
			if (x1 - x2 >= 0) {
				path.push('LL');
				return r(x1 - 1, y1 + 2, x2, y2, path);
			}
			else {
				path.push('LR');
				return r(x1 + 1, y1 + 2, x2, y2, path);
			}
		} else if (x1 - x2 > 0) {
			path.push('L');
			return r(x1 - 2, y1, x2, y2, path);
		} else if (x2 - x1 > 0) {
			path.push('R');
			return r(x1 + 2, y1, x2, y2, path);
		}
		return path;
	}

    var path = r(j_start, i_start, j_end, i_end, []);
    if (path.length == 0) {
        console.log('Impossible');
    } else {
        var order = ['UL', 'UR', 'R', 'LR', 'LL', 'L'];
        console.log(path.length);
        console.log(
            path.sort((a,b) => (
                order.indexOf(a) - order.indexOf(b)
            )).join(' ')
        );
    }
}