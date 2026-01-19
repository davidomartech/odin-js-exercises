const convertToCelsius = function (temp) {
  let conversionC = (temp - 32) * (5 / 9);
  return conversionC.toFixed(1) * 1;
};

const convertToFahrenheit = function (temp) {
  let conversionF = temp * (9 / 5) + 32;
  return conversionF.toFixed(1) * 1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
