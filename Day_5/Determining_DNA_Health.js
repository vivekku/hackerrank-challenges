const getCache = (genes,health) => {
  let cache={},c=cache;
  for (let i=genes.length;i--;c=cache){
    const gene=genes[i],len=gene.length,s=health[i]
    for (let j=0,g;j<len;j++)c=(c[g=gene[j]]=c[g]||{});
    (c.scores=c.scores||[]).push({i,s})
  }
  return cache;
}
const getScore = (cache,s,e,d) => {
  let total=0,len=d.length,c=cache
  for (let i=0,j=0,ss;i<len;j=++i,c=cache){
    while(c=c[d[j++]]){
      if(ss=c.scores)for(let k=ss.length;k--;){
        const sc=ss[k]
        if(sc.i>e)break;if(sc.i>=s)total+=sc.s;
      }
    }
  }
  return total
}
function main() {
	const n = parseInt(readLine(), 10);

    const genes = readLine().split(' ');

    const health = readLine().split(' ').map(healthTemp => parseInt(healthTemp, 10));
	
	const cache = getCache(genes, health);

    const s = parseInt(readLine(), 10);

	let min = Infinity, max = 0;
    for (let sItr = 0; sItr < s; sItr++) {
        const firstLastd = readLine().split(' ');

        const first = parseInt(firstLastd[0], 10);

        const last = parseInt(firstLastd[1], 10);

        const d = firstLastd[2];
		
		const score = getScore(cache, first, last, d)
		if (score < min) {
			min = score;
		}
		if (score > max) {
			max = score;
		}
    }
	console.log(min + " " + max);
}