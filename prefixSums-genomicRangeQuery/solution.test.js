const solution = require('./solution');

describe('genomic range query', () => {
  test('example input', () => {

    const S = "CAGCCTA";
    const P = [2, 5, 0];
    const Q = [4, 5, 6];
    const expected = [2, 4, 1];
    expect(solution(S, P, Q)).toEqual(expected);
  });
});
