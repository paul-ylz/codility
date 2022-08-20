const solution = require('./solution');

describe('CountDiv', () => {
  test('example input', () => {
    const A = 6;
    const B = 11;
    const K = 2;
    expect(solution(A,B,K)).toBe(3);
  });

  test('simple', () => {
    const A = 11;
    const B = 345;
    const K = 17;
    expect(solution(A,B,K)).toBe(20);
  });
});
