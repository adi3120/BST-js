function makeAdjMatrix(nodelist) {
    let maxIndex = Math.max(...nodelist);
    let adjMat = new Array();
    for (let i = 0; i <= maxIndex; i++) {
        adjMat[i] = new Array();
        for (let j = 0; j <= maxIndex; j++) {
            if ((nodelist.indexOf(i) > -1 && nodelist.indexOf(j) > -1) && i != j) {
                let cnntion = window.prompt(`Is ${i} connected to ${j}?`);
                adjMat[i][j] = parseInt(cnntion);
            } else adjMat[i][j] = 0;
        }
    }
    return adjMat;
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    push(data) {
        let temp = new Node(data);
        let p = this;
        while (p.next) {
            p = p.next;
        }
        p.next = temp;
    }
}

function makeAdjList(nodelist) {
    let adjList = new Array(nodelist.length);
    let n = 0;
    let conArr = [1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1];
    for (let i = 0; i < nodelist.length; i++) {
        adjList[i] = new Node(nodelist[i]);
        for (let j = 0; j < nodelist.length; j++) {
            if (i != j) {
                let connected = conArr[n];
                n++;
                if (connected) {
                    adjList[i].push(j);
                }
            }
        }
    }
    return adjList;
}

makeAdjList([0, 1, 2, 3, 4]);


////BEST VERSION///////
let adjlist = new Array(5);
for (let i = 0; i < adjlist.length; i++) {
    adjlist[i] = new Array();
}

function addEdge(u, v) {
    adjlist[u].push(v);
    adjlist[v].push(v);
}

addEdge(0, 1);
addEdge(0, 4);
addEdge(1, 2);
addEdge(1, 3);
addEdge(1, 4);
addEdge(2, 3);
addEdge(3, 4);

//////---------------///////////////////////