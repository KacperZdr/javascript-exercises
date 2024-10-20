const sumAll = function (a, b) {
  let sum = 0;

  //  Exchange numbers if second value is smaller
  if (a > b) {
    [a, b] = [b, a];
  }
  // checks if any number is negative and if not, return ERROR
  let xa = Math.sign(a);
  let xb = Math.sign(b);
  if (xa == -1 || xb == -1) {
    return "ERROR";
  }
  // checks if any number is integer and if not, return ERROR
  if (Number.isInteger(a) != true || Number.isInteger(b) != true) {
    return "ERROR";
  }

  for (let i = a; i <= b; i++) {
    sum = sum + i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
