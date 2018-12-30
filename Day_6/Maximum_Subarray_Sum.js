function maximumSum(a, m) {
	for (var accum = 0, i = 0; i < a.length; i++) {
      accum = a[i - 1] !== undefined ? a[i - 1][1] : 0;
      a[i] = [i, (parseInt(a[i]) + accum) % m];
    }
    a.sort(function(a, b) { 
      return a[1] - b[1]
    });
    var min = m;
    var sign = 1, diff;
    for (var d = 1; d < a.length; d++) {
      sign = a[d][0] > a[d - 1][0] ? 1 : -1
      diff = sign * (a[d - 1][1] - a[d][1]);
      if (diff > 0) {
        min = diff < min ? diff : min;
      }
    }
    var right = a[a.length - 1][1];
    var left = m - min;
    return (right > left ? right : left);
}