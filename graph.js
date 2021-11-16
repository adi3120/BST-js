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
    for (let i = 0; i < adjList.length; i++) {
        adjList[i] = new Node(nodelist[i]);
    }
    for (let i = 0; i < nodelist.length; i++) {
        if (i != j) {
            let connected = window.prompt(`does ${nodelist[i]} points to ${nodelist[j]} ?`);
            if (connected) {
                adjList[i].push(j);
            }
        }
    }
    return adjList;
}