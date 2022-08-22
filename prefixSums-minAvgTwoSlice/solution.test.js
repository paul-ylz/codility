const solution = require('./solution');

describe('Min average two slices', () => {
  test('example input', () => {
    const A = [4, 2, 2, 5, 1, 5, 8];
    const expected = 1

    expect(solution(A)).toEqual(expected)
  });
});
