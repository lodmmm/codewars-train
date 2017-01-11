# codewars-train

codewars 里面的练习题的个人解答, 以及一些平时遇到的场景的一些函数的封装

1. to two one => 入参两个字母字符串(纯小写), 返回两个字符串里出现过的字母的集合, 要求结果集合无重复且有序
    - 两个字符串处理方式相同, 先做 `concat` 处理
    - 初始化一个结果数组
    - `for` 循环遍历字符串, 利用 `indexOf` 方法确定结果结果数组里面是不是有当前判断的字母, `有 => pass`, `没有 => push`
    - 全小写字母, 可以直接 `sort()`, 之后 `arr => str`, 直接 `join('')`
2. highest and lowest => 入参为类似 `'4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'` 的字符串, 要求找到其中的最大和最小的数字
    - 先做 `str => arr` 的操作
    - 初始化 `low => Infinity`, `high => -Infinity`
    - 一次循环
        + `index < low` ? `low = index` : `do nothing`
        + `index > high` ? `high = index` : `do nothing`
    - 循环结束, 寻找也结束, 得到了 `low` 和 `high`
3. number-format-thousand => 千分位分隔符, 支持自己配置 point 标示和 thousands 的标示
    - `number => str`, 去空格
    - `point` 和 `thousands` 规定默认值
    - 判断是不是有小数部分, 分开处理
    - 调用内部函数 `formatWhole`, 得到结果, 内部函数实现思路 :
        - 三位三位的取, 所以用正则 `match`
        - `match` 不到的位单独考虑
        - 最终结果拼上 `thousands` 分隔符
