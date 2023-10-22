'use strict';
const calcPower = function (num, power) {
    if (power !== 1) {
      return num * calcPower(num, power - 1);
    }
    return num;
};

console.log(calcPower(4, 5));
console.log(calcPower(10, 2));
console.log(calcPower(20, 8));
