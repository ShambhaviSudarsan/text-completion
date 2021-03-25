class TrieNode {
    constructor(character) {
        this.character = character;
        this.leaf = false;
        this.map = {};
        this.words = [];
    }
}

function add(str,i,node){
    if(i === str.length){
        node.leaf = true;
        return;
    }
    if(!node.map[str[i]]){
        node.map[str[i]] = new TrieNode(str[i]);
    }
    node.words.push(str);
    add(str,i+1,node.map[str[i]]);
}

function search(str,i,node){
    if(i === str.length){
        return node.words;
    }
    if(!node.map[str[i]]){
        return [];
    }
    return search(str,i+1,node.map[str[i]])
}
