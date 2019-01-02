class Trie {
  constructor(key = '') {
    this.key = key;
    this.children = [];
    this.size = 0;
  }
  
  add(word, prefix = '') {
    if (!word) return;    
    prefix += word[0];
    const rest = word.slice(1);    
    const found = this.findChild(prefix);      
    if (found) {
      found.size++;
      return found.add(rest, prefix);
    }    
    const newNode = new Trie(prefix);
    this.children.push(newNode);
    newNode.size++;
    return newNode.add(rest, prefix);
  }  
  find(key) {
    if (!key) return 0;    
    let currentNode = this;
    let substring;
    let end = 1
    while(end <= key.length) {
      substring = key.slice(0, end);
      const foundSubstring = currentNode.findChild(substring);
      if (foundSubstring) {
        currentNode = foundSubstring;
        end++;
        continue;
      }
      return 0;
    }    
    return currentNode.size;
  }  
  findChild(key) {
    return this.children.find(
      node => node.key === key
    );
  }  
}

function contacts(queries) {
  const trie = new Trie();  
  return queries.map(
    ([ command, arg ]) =>
      trie[command](arg)          
  ).filter(item => item !== undefined);
}