const solution = require('./solution');

describe('CountDiv', () => {
  test('example input', () => {
    const A = 6;
    const B = 11;
    const K = 2;
    expect(solution(A,B,K)).toBe(3);
  });
});
