### 题目描述
给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

保证base和exponent不同时为0

### 思路
- exponent为正整数时
  - exponent 为偶数时，乘方结果等于： （base ** 2）**（exponent / 2）
  - exponent 为奇数时，乘方结果等于： base *（base ** 2）**（（exponent - 1） / 2）
- exponent为f负整数时，转化为正整数时的情况
  base = 1 / base
  exponent = -exponent