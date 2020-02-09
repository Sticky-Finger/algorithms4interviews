type Value = any

class TreeNode {
  constructor(x: Value) {
    this.val = x
    this.left = null
    this.right = null
  }
  public val: Value
  public left: TreeNode
  public right: TreeNode
}

let a: TreeNode = null
console.log(a)

function reConstructBinaryTree(pre: Array<Value>, vin: Value[])
{
    // write code here
}