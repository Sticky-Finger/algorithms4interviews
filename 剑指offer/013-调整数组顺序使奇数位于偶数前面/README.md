### 题目描述
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

### 思路

- 1.暴力法：遍历整个数组并检查每项的奇偶性，将奇数、偶数分别放进两个数组，最后合并两个数组输出

- #### 2.参考答案：
  - i++往前走碰到偶数停下来，j = i + 1
  - 若