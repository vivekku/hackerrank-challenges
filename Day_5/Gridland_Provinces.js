var res = new Set();

function mem(x) {
  res.add(x);
}

function hash(str, seed) {
  var l = str.length, h = seed ^ l, i = 0, k;
  while (l >= 4) {
  	k = ((str.charCodeAt(i) & 0xff)) |
  	  ((str.charCodeAt(++i) & 0xff) << 8) |
  	  ((str.charCodeAt(++i) & 0xff) << 16) |
  	  ((str.charCodeAt(++i) & 0xff) << 24); 
    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));
    k ^= k >>> 24;
    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));
	h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k;
    l -= 4;
    ++i;
  }
  switch (l) {
  case 3: h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
  case 2: h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
  case 1: h ^= (str.charCodeAt(i) & 0xff);
          h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
  }
  h ^= h >>> 13;
  h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
  h ^= h >>> 15;
  return h >>> 0;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const p = parseInt(readLine(), 10);
    for (let pItr = p; pItr > 0; pItr--) {
        res.clear();
        let n = parseInt(readLine(), 10),
            s1 = readLine(),
            s2 = readLine();
            mem(s1.split('').reverse().join('') + s2)
            mem(s1 + s2.split('').reverse().join(''))
            mem(s2.split('').reverse().join('') + s1)
            mem(s2 + s1.split('').reverse().join(''))
            var col = Math.floor(s1.length + s2.length) / 2,
            str1 = new String(),
            str2 = new String(),
            str3 = new String(),
            str4 = new String(),
            left1 = new String(),
            left2 = new String(), 
            z1 = new String(), 
            z2 = new String(), 
            z3 = new String(),
            z4 = new String(),
            r1sub = new String(), 
            r2sub = new String(),
            right1 = new String(),
            right2 = new String(),
            right3 = new String(),
            right4 = new String(),
            i = 0, 
            k = 0, 
            j = 0, 
            l = col - 1;
            for (n; n > 1; n--) {
              z3 = new String();
              z4 = new String();
              str1 = new String();
              str2 = new String();
              str3 = new String();
              str4 = new String();
              for (i = 0, j = n - 2; i < n; i++, j--) {
                if (i <= n - 2) {
                  str1 += s1[j];
                  str2 += s2[i];
                  str3 += s2[j];
                  str4 += s1[i];
                } else if (i >= n - 2) {
                  for (k = 0; z3.length / 2 < (col - str1.concat(str2).length / 2); k++) {
                    var pos = (str1.concat(str2).length / 2) + k;
                    if ((((str1.concat(str2)).length / 2) + k) % 2 === 0) {
                      z3 += s1[pos].concat(s2[pos]);
                      z4 += s2[pos].concat(s1[pos]);
                    } else {
                      z3 += s2[pos].concat(s1[pos]);
                      z4 += s1[pos].concat(s2[pos]);
                    }      
                  }
                }
              }  
              z1 = z3;
              z2 = z4;
              left1 = str1.concat(str2);
              left2 = str3.concat(str4);
              right1 += s1[n - 1];
              right2 += s2[n - 1];
              right3 = right1.split('').reverse().join('');
              right4 = right2.split('').reverse().join('');
              for (j = 0; j < z1.length - 1; j += 2) {
                  z3 = z1.substr(0, j).split('').reverse().join('');
                  z4 = z2.substr(0, j).split('').reverse().join('');
                  r1sub = right1.substr(0, col - (Math.floor(left1.length / 2) + (z1.substr(0, j).length / 2))).split('').reverse().join('') + right2.substr(0, col - (Math.floor(left1.length / 2) + (z1.substr(0, j).length / 2)))
                  r2sub = right2.substr(0, col - (Math.floor(left1.length / 2) + (z1.substr(0, j).length / 2))).split('').reverse().join('') + right1.substr(0, col - (Math.floor(left1.length / 2) + (z1.substr(0, j).length / 2)))
                let left = (left1.length / 2) % 2 === 0,
                    zig = (z1.substr(0, j).length / 2) % 2 === 0;
                if (z1.substr(0, j).length > 0) {
                  if (left && zig) {
                    mem(left2.concat(z1.substr(0, j), r1sub))
                    mem(r2sub.concat(z3, left1))
                  } else if (left && !zig) {
                    mem(left2.concat(z1.substr(0, j), r2sub))
                    mem(r1sub + z3 + left1)
                  } else if (!left && zig) {
                    mem(left1.concat(z1.substr(0, j), r2sub))
                    mem(r1sub.concat(z3, left2))
                  } else if (!left && !zig) {
                    mem(left1.concat(z1.substr(0, j), r1sub))
                    mem(r2sub.concat(z3, left2))
                  }
                } else {
                  mem(left1.concat(right4, right1))
                  mem(left2.concat(right3, right2))
                }
                if (z2.substr(0, j).length > 0) {
                  if (left && zig) {
                    mem(left1.concat(z2.substr(0, j), r2sub))
                    mem(r1sub.concat(z4, left2))
                  } else if (left && !zig) {
                    mem(left1.concat(z2.substr(0, j), r1sub))
                    mem(r2sub.concat(z4, left2))
                  } else if (!left && zig) {
                    mem(left2.concat(z2.substr(0, j), r1sub))
                    mem(r2sub.concat(z4, left1))
                  } else if (!left && !zig) {
                    mem(left2.concat(z2.substr(0, j), r2sub))
                    mem(r1sub.concat(z4, left1));
                  }
                } else {        
                  mem(right4.concat(right1, left1))
                  mem(right3.concat(right2, left2))
                }
              }
            }
        ws.write(res.size + "\n");
    }
    ws.end();
}
