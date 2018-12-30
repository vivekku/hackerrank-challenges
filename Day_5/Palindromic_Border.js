function palindromicBorder(str) {
  const counter = {
    count: 0,
    devidedBy: 1e9 + 7,
    add (count) {
      this.count = this.count + count
      if (this.count >= this.devidedBy) this.count %= this.devidedBy
    }
  }
  const newBorderState = (border, j=0, k=1) => ({border: border, j: j, k: k, indices: []})
  const kinds = []
  const borderStateMap = {}
  'abcdefgh'.split('').forEach(char => {
    borderStateMap[char] = newBorderState(char)
    if (str.indexOf(char) !== -1) kinds.push(char)
  })
  
  if (kinds.length === 1) {
    const len = str.length
    counter.add(len * (len + 1) * (len - 1) / 6)
    return counter.count
  }
  
  for (let i=0; i < str.length; i++) {
    borderStateMap[str[i]].indices.push(i)
  }
  
  
  
  
  
  const borderStateArray = []
  for (const char of Object.keys(borderStateMap)) {
    let j = borderStateMap[char].j
    let alive = borderStateMap[char].indices
    delete borderStateMap[char]
    while (alive.length) {
      const i = alive[0]
      while (i === alive[0]) {
        const prevBorder = str.slice(i, i+j)
        const borderState = newBorderState(prevBorder, j-1)
        alive = alive.filter(l => {
          if (str[l+j] === char) return true
          else if (str[l+j]) return void borderState.indices.push(l)
          else return false
        })
        counter.add(alive.length * (alive.length - 1) / 2)
        if (borderState.indices.length) borderStateArray.push(borderState)
        j++
      }
    }
  }
  
  
  while (borderStateArray.length) {
    const index = borderStateArray.length-1
    const j = borderStateArray[index].j
    let k = borderStateArray[index].k
    let alive = borderStateArray[index].indices
    borderStateArray.pop()
    while (alive.length) {
      const i = alive[0]
      while (i === alive[0]) {
        const char = str[i+j+k]
        const prevBorder = str.slice(i-k+1, i+j+k-1)
        const borderState = newBorderState(prevBorder, j, k)
        alive = alive.filter(l => {
          const curr0 = str[l-k]
          const curr1 = str[l+j+k]
          if (!curr1) return false
          else if (curr0 === char && curr1 === char) return true
          else if (curr0 === curr1) return void borderState.indices.push(l)
          else return false
        })
        counter.add(alive.length * (alive.length - 1) / 2)
        if (borderState.indices.length) borderStateArray.push(borderState)
        k++
      }
    }
  }
  return counter.count
}
