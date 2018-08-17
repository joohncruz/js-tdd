module.exports = {
  sum: (num1, num2) => num1 + num2,
  sub: (num1, num2) => num1 - num2,
  mult: (num1, num2) => num1 * num2,
  div: (num1, num2) => (
    (num2 === 0) ?
      'não é possivel divisão por zero!' :
      num1 / num2
  ),
};

