function add() {
  // 实现该函数
  if (arguments[0] && arguments[1]) {
    if (arguments[0] && arguments[1]) {
      var num1 = arguments[0].split('').reverse();
      var num2 = arguments[1].split('').reverse();
      var length = num1.length > num2.length ? num1.length : num2.length;
      var flag = 0;
      var sum = [];
      for (var i = 0; i < length; i++) {
        sum[i] = flag + (num1[i] * 1 + num2[i] * 1) % 10;
        flag = parseInt((num1[i] * 1 + num2[i] * 1) / 10);
      }
      flag && (sum[length] = flag);
      return sum.reverse().join('');
    }
    return false;
  }
}

module.exports = add;