/**
 * Author : anning
 * Date : 17/1/14
 * Mail : amnhhlod@gmail.com
 */

/**
 * 题目大意 :
 *
 * In the following 6 digit number:

 * 283910
 * 91 is the greatest sequence of 2 digits.

 * Complete the solution so that it returns the largest five digit number found within the number given..
 * The number will be passed in as a string of only digits.
 * It should return a five digit integer.
 * The number passed may be as large as 1000 digits.
 *
 *
 * 大致就是, 给你一串数字, 需要从 0 位开始找, 找出来当前位与其后面四位拼起来的数字最大的那个数字
 */

/*************************************  2016-01-14  ***************************************/

function solution (digits){
  // 推到数组里面
  digits = digits.split('');
  // 中间数组
  var retArr = [];

  // 分别取到所有的五位数
  digits.map(function (val, idx, arr) {
    if (idx < arr.length - 4) {
      var _arr = arr.slice(idx, idx + 5);
      retArr.push(Number(_arr.join('')));
    }
  });
  var ret = 0;
  // 找到这里面最大的数字
  for (var i = 0, len = retArr.length; i < len; i ++) {
    if (retArr[i] > ret) {
      ret = retArr[i];
    }
  }
  // 返回这个数字
  return ret;
}

/*************************************  2016-01-14  ***************************************/
function solution(digits){
  var r = 0;
  for (i = 0; i < digits.length - 4; i++) {
    r = Math.max(r, parseInt(digits.substr(i,5),10));
  }
  return r;
}