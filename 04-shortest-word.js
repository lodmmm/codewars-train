/*
 * Author : amnhh
 * Date   : 2016-01-12
 * Email  : amnhhlof@gmail.com
 */

/**
 * 题目要求 : 
 * 
 *  Simple, given a string of words, return the length of the shortest word(s).
 *  String will never be empty and you do not need to account for different data types.
 * 
 * 大致的意思就是, 给定一堆以空格分割的字符串, 返回这些字符串段里面字母最少的那个的 length, 不会传入空字符串, 所以不用做空检测
 * 
 * 用于检测的字符串长这样 : bitcoin take over the world maybe who knows perhaps
 */

/*************************************  2016-01-12  ***************************************/

function findShort (s) {
  var hashArr = [];
  var val;
  var length;
  var ret;
  // str => arr
  s = s.split(' ');
  // 把一个新立的 arr 作为容器, 整体做桶排序, length 作为桶的下标
  for (var i = 0, len = s.length; i < len; i ++) {
    val = s[i];
    length = val.length;
    // 没必要做, 只要占个空位就好
    // hashArr[length] === undefined ? hashArr[length] = [val] : hashArr[length].push(val);
    hashArr[length] = val;
  }
  // 检测第一个有元素的桶, 那个的下标就是 length
  // 用 Array.prototype.some 来做, 遇到第一个 true 的时候就结束
  hashArr.some(function (val, idx) {
    if (val !== undefined) {
      // 不为 undefined 的就说明桶里面有东西
      ret = idx;
      return true;
    }
  });
  return ret;
}

/*************************************  2016-01-12  ***************************************/

function findShort (s) {
  // 先根据字符串全部都搞成 length 的数组
  // 直接找数组里面的最小值
  return Math.min(s.split(' ').map(val => val.length));
}