function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const t = parseInt(readLine(), 10);
	var arr = new Array(t);
    for (var i = 0; i < t; i++) {
        const dm = readLine().split(' ');
        const d = parseInt(dm[0], 10);
        const m = parseInt(dm[1], 10);
		arr[i] = { d: d, m: m };
    }
	var step = 0;
	var ans = 0;
	var used = [];
	for (var i = 0; i < arr.length; i++) {
		step += arr[i].m;
		arr[i].pos = step;
		used.push(arr[i]);
		for (var j = i - 1; j >= 0; j--) {
			var diff = used[j + 1].pos - used[j + 1].d;
			var comp = used[j].pos - used[j].d + used[j + 1].m;
			if (diff > 0 && comp > 0 &&  diff < ans && i > 1000) {
				break;
			}
			if (diff > comp) {
				used[j + 1].pos -= used[j].m;
				used[j].pos += used[j + 1].m;
				var tmp = used[j + 1];
				used[j + 1] = used[j];
				used[j] = tmp;
				ans = Math.max(ans, comp);
			} else {
				break;
			}
		}
	ans = Math.max(ans, arr[i].pos - arr[i].d);
    ws.write(ans + "\n");
    }
    ws.end();
}