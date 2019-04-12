function big(array) {
  return array
    .filter(number => number > 5)
    .map(number => `Wow, ${number} is so big!`);
}

module.exports = big;
