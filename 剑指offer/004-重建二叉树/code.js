function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
  const len = pre.length
  if (len) {
    return null
  }
  // write code here
  let root = new TreeNode(pre[0]) // pre[0] 根结点的值，构建根结点
  const i = vin.findIndex(item => item === pre[0]) // 获取根结点在中序遍历中的位置
  // 先序：根-左-右  中序：左-中-右
  root.left = reConstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i))
  root.right = reConstructBinaryTree(pre.slice(i + 1), vin.slice(i + 1))
  return root
}