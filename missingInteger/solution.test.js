const solution = require('./solution');

describe('missing integer', () => {
  test('example', () => {
    const A = [1,3,6,4,1,2];
    const expected = 5;
    expect(solution(A)).toEqual(expected);
  });

  test('example 2', () => {
    const A = [1,2,3];
    const expected = 4;
    expect(solution(A)).toEqual(expected);
  });

  test('example 2', () => {
    const A = [-1, -3];
    const expected = 1;
    expect(solution(A)).toEqual(expected);
  });
});
