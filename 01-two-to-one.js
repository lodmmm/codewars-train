/*
 * Author : amnhh
 * Date   : 2017-01-11
 * Email  : amnhhlof@gmail.com
 */

/**
 * 题目要求 :
 * 
 * Take 2 strings s1 and s2 including only letters from a to z. 
 * Return a new sorted string, the longest possible, containing distinct letters, 
 * - each taken only once - coming from s1 or s2.
 * 
 * 大致就是, 入参两个纯字母字符串, 返回这两个字符串里面所以字母的集合, 要求不可以重复且返回的字符串排序
 */


/*************************************  2016-01-11  ***************************************/
function longest(s1, s2) {
  // 因为要统一处理, 这里先两个串起来
  s1 = s1.concat(s2);
  
  // 变量声明
  var ret = [];
  var i = 0;
  var len = s1.length;
  
  // 如果说 ret 里面没有, 就向 ret 里面 push
  for (; i < len; i ++) {
    if (ret.indexOf(s1[i]) === -1) {
      ret.push(s1[i]);
    }
  }

  // 最后排序并集合成 string 输出
  return ret.sort().join('');
}