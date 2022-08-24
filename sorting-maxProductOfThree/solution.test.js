const solution = require('./solution');

describe('sorting - maxProductOfThree', () => {
  test('example input', () => {
    const A = [-3, 1, 2, -2, 5, 6]

    expect(solution(A)).toEqual(60)
  });

  test('triple numbers', () => {
    const A = [10, 10, 10]

    expect(solution(A)).toEqual(1000)
  });
});
