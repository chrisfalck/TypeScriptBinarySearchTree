namespace cfalck {
    export class Node<T> {

        // Generic value.
        private value: T = null;

        // How many nodes of the same value have been inserted.
        private multiplicity: number = 1; 

        private leftChild: Node<T> = null;
        private rightChild: Node<T> = null;

        constructor(value: T) {
            this.value = value; 
        }

        public addNode(newNode: Node<T>) {
            if (newNode.value > this.value && this.rightChild === null) {
                this.rightChild = newNode;
            } else if (newNode.value > this.value) {
                this.rightChild.addNode(newNode);
            } else if (newNode.value < this.value && this.leftChild === null) {
                this.leftChild = newNode;
            } else if (newNode.value < this.value) {
                this.leftChild.addNode(newNode);
            } else {
                this.multiplicity += 1;
            }
        }

        public searchFor(value: T): Node<T> {

            // This node matches the value.
            if (value === this.value) {
                return this;
            }

            // Right child might have the value.
            if (value > this.value && this.rightChild === null) {
                return null;
            } else if (value > this.value) {
                return this.rightChild.searchFor(value);
            }

            // Left child might have the value.
            if (value < this.value && this.leftChild === null) {
                return null;
            } else if (value < this.value) {
                return this.leftChild.searchFor(value);
            }
        }
    }
}


window.onload = () => {
    var root: cfalck.Node<number> = new cfalck.Node(5);
    var treeValues: number[] = [7, 3, 10, 15, 1, 5];
    for (let i = 0; i < treeValues.length; ++i) {
        root.addNode(new cfalck.Node<number>(treeValues[i]));
    }

    var htmlText = `Does the tree contain 6?  ${root.searchFor(6) ? 'Yes' : 'No'}\n` +
        `Does the tree contain 15? ${root.searchFor(15) ? 'Yes' : 'No'}\n` +
        `Does the tree contain 21? ${root.searchFor(21) ? 'Yes' : 'No'}\n` +
        `Does the tree contain 5?  ${root.searchFor(5) ? 'Yes' : 'No'}\n` +
        `Does the tree contain -1? ${root.searchFor(-1) ? 'Yes' : 'No'}\n` +
        `Does the tree contain 1?  ${root.searchFor(1) ? 'Yes' : 'No'}\n`;
    document.getElementById('tree-values-list').innerText = treeValues.toString();
    document.getElementById('tree-values-search-results').innerText = htmlText;
};






