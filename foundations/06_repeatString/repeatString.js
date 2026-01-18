const repeatString = function (str, repeatBy) {
  if (repeatBy === 1) return str;
  if (repeatBy === 0 || str === "") return "";
  if (repeatBy < 0) return "ERROR";

  let output = "";
  for (let i = 0; i < repeatBy; ++i) {
    output += str;
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;
