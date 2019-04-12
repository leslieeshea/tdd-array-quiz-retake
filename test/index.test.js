const big = require('../lib/index');

describe('Big function', () => {
  it('has removed any numbers less than 5 and created new phrase', () => {
    const array = [1, 3, 5, 7, 2];
    const result = big(array);
    expect(result).toEqual(['Wow, 7 is so big!']);
  });
});
