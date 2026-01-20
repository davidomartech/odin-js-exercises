const palindromes = function (str) {
  let palindrome = str.toLowerCase();
  str = str.toLowerCase().replace(/[^\w]|_/g, "");
  palindrome = palindrome.replace(/[^\w]|_/g, "");
  return palindrome === str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
