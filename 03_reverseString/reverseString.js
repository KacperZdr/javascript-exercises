const reverseString = function (str) {
  let chars = Object.assign([], str);
  let reverseChars = chars.reverse();
  return reverseChars.join("");
};

// Do not edit below this line
module.exports = reverseString;
