/*
 * Author : amnhh
 * Date   : 2017-01-11
 * Email  : amnhhlof@gmail.com
 */

/**
 * 千分位分隔符简易实现
 */

/**
 * @param {Number} number 必须, 待处理的数字, 接收 Number/String
 * @param {String} point 可选 小数点的代替字符, 默认 '.'
 * @param {String} thousands 可选 千分位分隔符的代替字符, 默认 ', '
 */

/*************************************  2016-01-11  ***************************************/

function numberFormatThousand (number, point, thousands) {

  function formatWhole (o) {
    // 小于三位的直接返回
    if (o.length < 3) {
      return o;
    }
    // 取 match 不到的位数
    var tmp = o.length % 3;
    // 取 match 不到的位
    var str = o.slice(tmp);
    // 取剩下的位
    var addStr = o.slice(0, tmp);

    // 三位三位分割开
    str = str.match(/\d{3}/g);
    // 有剩下的位就放在前面
    addStr && str.unshift(addStr);

    // join 上千分位分隔符
    return str.join(thousands);
  }

  // number => str, 去空格
  number = ('' + number).replace(/[^0-9+\-.]/g, '');
  // point 和 thousands 默认值
  point = point || '.';
  thousands = thousands || ', ';

  // 根据小数点分割
  var interArr = number.split('.');
  // 有没有小数点分别考虑
  return interArr[1] 
    ? formatWhole(interArr[0]) + point + interArr[1]
    : formatWhole(interArr[0]);

}