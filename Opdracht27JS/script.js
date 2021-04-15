/** @format */

function numbers1(number1, number2) {
  let sum1 = number1 * number1;
  let sum2 = number2 * number2;
  let sum3 = sum1 + sum2;
  let sum4 = sum3 * sum3;
  return sum4;
}

console.log(numbers1(25, 25));

const numbers2 = function (number1, number2) {
  let sum1 = number1 * number1;
  let sum2 = number2 * number2;
  let sum3 = sum1 + sum2;
  let sum4 = sum3 * sum3;
  return sum4;
};

console.log(numbers2(25, 25));

const numbers3 = (number1, number2) => {
  let sum1 = number1 * number1;
  let sum2 = number2 * number2;
  let sum3 = sum1 + sum2;
  let sum4 = sum3 * sum3;
  return sum4;
};

console.log(numbers3(25, 25));
