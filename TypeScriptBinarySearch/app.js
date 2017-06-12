var cfalck;
(function (cfalck) {
    var Node = (function () {
        function Node(value) {
            // Generic value.
            this.value = null;
            // How many nodes of the same value have been inserted.
            this.multiplicity = 1;
            this.leftChild = null;
            this.rightChild = null;
            this.value = value;
        }
        Node.prototype.addNode = function (newNode) {
            if (newNode.value > this.value && this.rightChild === null) {
                this.rightChild = newNode;
            }
            else if (newNode.value > this.value) {
                this.rightChild.addNode(newNode);
            }
            else if (newNode.value < this.value && this.leftChild === null) {
                this.leftChild = newNode;
            }
            else if (newNode.value < this.value) {
                this.leftChild.addNode(newNode);
            }
            else {
                this.multiplicity += 1;
            }
        };
        Node.prototype.searchFor = function (value) {
            // This node matches the value.
            if (value === this.value) {
                return this;
            }
            // Right child might have the value.
            if (value > this.value && this.rightChild === null) {
                return null;
            }
            else if (value > this.value) {
                return this.rightChild.searchFor(value);
            }
            // Left child might have the value.
            if (value < this.value && this.leftChild === null) {
                return null;
            }
            else if (value < this.value) {
                return this.leftChild.searchFor(value);
            }
        };
        return Node;
    }());
    cfalck.Node = Node;
})(cfalck || (cfalck = {}));
window.onload = function () {
    var root = new cfalck.Node(5);
    var treeValues = [7, 3, 10, 15, 1, 5];
    for (var i = 0; i < treeValues.length; ++i) {
        root.addNode(new cfalck.Node(treeValues[i]));
    }
    var htmlText = ("Does the tree contain 6?  " + (root.searchFor(6) ? 'Yes' : 'No') + "\n") +
        ("Does the tree contain 15? " + (root.searchFor(15) ? 'Yes' : 'No') + "\n") +
        ("Does the tree contain 21? " + (root.searchFor(21) ? 'Yes' : 'No') + "\n") +
        ("Does the tree contain 5?  " + (root.searchFor(5) ? 'Yes' : 'No') + "\n") +
        ("Does the tree contain -1? " + (root.searchFor(-1) ? 'Yes' : 'No') + "\n") +
        ("Does the tree contain 1?  " + (root.searchFor(1) ? 'Yes' : 'No') + "\n");
    document.getElementById('tree-values-list').innerText = treeValues.toString();
    document.getElementById('tree-values-search-results').innerText = htmlText;
};
//# sourceMappingURL=app.js.map