class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    push(data) {
        if (!this.data) {
            this.data = data;
            this.left = null;
            this.right = null;
        } else {
            let temp = this;
            while (1) {
                if (data > temp.data) {
                    if (temp.right) {
                        temp = temp.right;
                    } else {
                        temp.right = new Node(data);
                        break;
                    }
                } else if (data < temp.data) {
                    if (temp.left) {
                        temp = temp.left;
                    } else {
                        temp.left = new Node(data);
                        break;
                    }
                } else {
                    break;
                }
            }
        }
        return;
    }
    inorder() {
        if (!this) {
            return;
        }
        if (this.left) {
            this.left.inorder();
        }

        console.log(this);

        if (this.right)
            this.right.inorder();
    }
    preorder() {
        if (!this) {
            return;
        }
        console.log(this);

        if (this.left) {
            this.left.preorder();
        }



        if (this.right)
            this.right.preorder();
    }
    postorder() {
        if (!this) {
            return;
        }


        if (this.left) {
            this.left.postorder();
        }



        if (this.right)
            this.right.postorder();

        console.log(this);

    }
}

let root = new Node(5);
for (let i = 1; i < 10; i++) {
    root.push(i);
}
root.preorder();
root.inorder();
root.postorder();