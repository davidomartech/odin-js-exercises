const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((current, next) => {
    return current + next;
  }, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((current, next) => {
    return current * next;
  }, 1);
};

const power = function (base, exp) {
  let output = base;
  for (let i = exp; i > 1; --i) {
    output *= base;
  }
  return output;
};

const factorial = function (a) {
  if (a === 0) return 1;
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
