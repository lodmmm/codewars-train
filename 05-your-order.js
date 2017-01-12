/*
 * Author : amnhh
 * Date   : 2016-01-12
 * Email  : amnhhlof@gmail.com
 */

/**
 * 题目要求 : 
 * 
 * Your task is to sort a given string. 
 * Each word in the String will contain a single number. 
 * This number is the position the word should have in the result.
 * ote: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * If the input String is empty, return an empty String. 
 * The words in the input String will only contain valid consecutive numbers.
 * For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
 * 
 * 大致就是 : 
 *  1. 入参空字符串, 返回空字符串
 *  2. 非空, 入参 `is2 Thi1s T4est 3a` 返回依据数字排好的字符串 `Thi1s is2 3a T4est`
 */

/*************************************  2016-01-12  ***************************************/

function order (words) {
  // 空字符串判断
  if (words === '') return '';

  // str => arr
  words = words.split(' ');
  var ret = [];
  // 还是依据 arr 的下标, 把字母一个个都塞到桶里面
  words.map(val => {
    ret[val.match(/\d/)[0]] = val;
  });
  // 因为从 1 开始, 所以把 index 为 0 的弹出
  ret.shift();
  // arr => str
  return ret.join(' ');
}