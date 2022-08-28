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

  test('negatives are bigger', () => {
    const A = [-2, -3, 0, 1, 2, 4]

    expect(solution(A)).toEqual(24)
  });

  test('zeroes do not contribute to max', () => {
    const A = [-3, 0, 2, 4]

    expect(solution(A)).toEqual(0)
  });

  test('negatives are smaller', () => {
    const A = [-2, -1, 0, 1, 2, 4]

    expect(solution(A)).toEqual(8)
  });
});
