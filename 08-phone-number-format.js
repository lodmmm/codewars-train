/**
 * Author : anning
 * Date : 17/1/16
 * Mail : amnhhlod@gmail.com
 */
/**
 * 完全不知道干啥的。。。
 *
 * Write a function that accepts an array of 10 integers (between 0 and 9),
 * that returns a string of those numbers in the form of a phone number.
 *
 * @example
 *  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 *
 * 把十个数字序列化成 (xxx) xxx-xxxx 的形式
 */

/*************************************  2016-01-16  ***************************************/

function createPhoneNumber(numbers){
  return '(' + numbers.slice(0, 3).join('') + ') ' + numbers.slice(3, 6).join('') + '-' + numbers.slice(6, 10).join('')
}