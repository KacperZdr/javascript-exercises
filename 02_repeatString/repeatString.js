const repeatString = function (string, number) {
  let newString = "";
  let x = Math.sign(number);

  if (x == -1) {
    return "ERROR";
  }

  for (let i = 0; i < number; i++) {
    newString = newString + string;
  }

  return newString;
};

// Do not edit below this line
module.exports = repeatString;
