const sumAll = function (startRange, endRange) {
  if (!Number.isInteger(startRange) || !Number.isInteger(endRange))
    return "ERROR";
  if (startRange < 0 || endRange < 0) return "ERROR";

  if (endRange < startRange) [startRange, endRange] = [endRange, startRange];
  let loopLength = endRange - startRange;
  let sum = startRange;
  for (let i = startRange + 1; i <= endRange; ++i) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
