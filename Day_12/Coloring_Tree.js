const readline = (function(callback) {
  var stdin = ''
  var lines
  var lineNumber = 0

  process.stdin.setEncoding('ascii')
  process.stdin.on('data', data => (stdin += data))
  process.stdin.on('end', splitData)

  function splitData() {
    lines = stdin.split('\n')
    callback()
  }

  return function() {
    if (lineNumber < lines.length) {
      return lines[lineNumber++].trim()
    } else {
      return null
    }
  }
})(main)

const splitline = () => readline().split(' ')
const splitnumbers = () => splitline().map(Number)
const readnumber = () => splitnumbers()[0]

function main() {
  const [numNodes, numQueries, rootNumber] = splitnumbers()

  const nodes = makeNodes(numNodes)
  const edges = readEdges(numNodes)
  const colors = readColors(numNodes)
  const queries = readQueries(numQueries)

  joinNodes(nodes[rootNumber], nodes, edges)
  colorNodes(nodes, colors)

  queryNodes(nodes, queries).forEach(answer => console.log(answer))
}

function makeNodes(numNodes) {
  const nodes = Array(numNodes + 1)
  for (let n = 1; n <= numNodes; n++) {
    nodes[n] = new Node(n)
  }
  return nodes
}

function readEdges(numNodes) {
  const edges = []
  for (let e = 1; e < numNodes; e++) {
    edges.push(splitnumbers())
  }
  return edges
}

function readColors(numNodes) {
  const colors = Array(numNodes + 1)
  for (let c = 1; c <= numNodes; c++) {
    colors[c] = readnumber()
  }
  return colors
}

function readQueries(numQueries) {
  const queries = []
  for (let q = 1; q <= numQueries; q++) {
    queries.push(readnumber())
  }
  return queries
}

function joinNodes(node, nodes, edges) {
  edges
    .filter(edge => edge.includes(node.number))
    .map(edge => (edge[0] === node.number ? edge[1] : edge[0]))
    .filter(edge => node.parent == null || edge !== node.parent.number)
    .forEach(edge => {
      node.children.push(nodes[edge])
      nodes[edge].parent = node
    })
  node.children.forEach(child => joinNodes(child, nodes, edges))
}

function colorNodes(nodes, colors) {
  for (let n = 1; n < nodes.length; n++) {
    nodes[n].color = colors[n]
  }
}

function queryNodes(nodes, queries) {
  return queries.map(query => queryNode(nodes[query]))
}

function queryNode(node, colors = new Set()) {
  colors.add(node.color)
  node.children.forEach(child => queryNode(child, colors))
  return colors.size
}

function Node(number) {
  this.number = number
  this.color = null
  this.parent = null
  this.children = []
}
