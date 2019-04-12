function big(array) {
  array
    .filter(number => number > 5)
    .map(number => `Wow ${number} is so big!`);
  return array;
}

module.exports = big;
