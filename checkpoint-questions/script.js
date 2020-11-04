const NBST = require('./NewBinarySearchTree')

const BST = require('./BinarySearchTree')

function treeTraversal() {

    const tree = new NBST;
    const arr = [25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90]
    tree.bfs(arr, tree)






    console.log(tree.bfs(tree, arr))

}



function display(tree, branch = 'main') {
    const { left, right, key } = tree

    console.log('KEY: ', key)

    console.log('Branch:', branch, 'from ', tree.parent ? tree.parent.key : 'none')

    console.log('Left:', left !== null ? left.key : "/", '| Right:', right !== null ? right.key : "/")

    if (!left && !right) {
        console.log('End of tree | Last leaf:', key)
        console.log('                                                    ')
    }

    if (tree.parent === null) {
        console.log('HEAD: ', key)
    }

    if (left) {
        console.log('                                                    ')
        display(left, 'left')
    }

    if (right) {
        console.log('                                                    ')
        display(right, 'right')
    }
}

treeTraversal()
