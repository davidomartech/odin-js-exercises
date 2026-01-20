const fibonacci = function (n) {
  n = Number(n);
  if (n === 0) return 0;
  if (n < 0) return "OOPS";
  let fibSeq = [1, 1];
  for (let i = 2; i < n; ++i) {
    fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
  }
  return fibSeq[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
