/*
 * Author : amnhh
 * Date   : 2016-01-13
 * Email  : amnhhlof@gmail.com
 */

/**
 * 题目要求
 *
 * Given two integers, which can be positive and negative,
 * find the sum of all the numbers between including them too and return it.
 * If both numbers are equal return a or b.
 *
 * @Example:
 * GetSum(1, 0) == 1   // 1 + 0 = 1
 * GetSum(1, 2) == 3   // 1 + 2 = 3
 * GetSum(0, 1) == 1   // 0 + 1 = 1
 * GetSum(1, 1) == 1   // 1 Since both are same
 * GetSum(-1, 0) == -1 // -1 + 0 = -1
 * GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
 */

/*************************************  2016-01-13  ***************************************/

function GetSum ( a,b ) {
  var ret = 0;
  var dir = a > b ? -1 : 1;
  var len = Math.abs(a - b);
  var idx = 0;
  for (var i = a; idx < len + 1; i += dir) {
    idx += 1;
    ret += i;
  }
  return ret;
}