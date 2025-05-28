const {substract, substract2} = require('./03-math.helpers.js');

test('substract 10 - 3 to equal 7', () => {
  expect(substract(10, 3)).toBe(7);
});



test('substract 3 - 10 to equal -7', () => {
  expect(substract2(3, 10)).toBe(-7);
});