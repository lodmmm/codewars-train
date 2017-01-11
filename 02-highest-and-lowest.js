/*
 * Author : amnhh
 * Date   : 2016-01-11
 * Email  : amnhhlof@gmail.com
 */

/**
 * 题目要求 : 
 * 
 * In this little assignment you are given a string of space separated numbers, 
 * and have to return the highest and lowest number.
 * 
 * 给出一个类似 '4 5 29 54 4 0 -214 542 -64 1 -3 6 -6' 这种的字符串, 要求找到最大的和最小的数字
 */


/*************************************  2016-01-11  ***************************************/

function highAndLow(numbers){
  // 先转成数组
  numbers = numbers.split(' ');

  // 再初始化一下最高的和最低的
  var low = Infinity;
  var high = -Infinity;
  
  // 循环去查找
  numbers.forEach(function (val) {
    // 把比较过程中的其中一项改为 Number 类型, 后续就不会以 String 来比较
    val = +val;
    if (val < low) {
      low = val;
    }
    if (val > high) {
      high = val;
    }
  });
  
  // 最后 return 成题目中的格式
  return high + ' ' + low;
}