const solution = require('./solution');

describe('genomic range query', () => {
  test('example input', () => {
    const S = "CAGCCTA";
    const P = [2, 5, 0];
    const Q = [4, 5, 6];
    const expected = [2, 4, 1];
    expect(solution(S, P, Q)).toEqual(expected);
  });

  test('extreme single', () => {
    const S = "A";
    const P = [0];
    const Q = [0];
    const expected = [1];
    expect(solution(S, P, Q)).toEqual(expected);
  });

  test('extreme double', () => {
    const S = "AC";
    const P = [0,0,1];
    const Q = [0,1,1];
    const expected = [1,1,2];
    expect(solution(S, P, Q)).toEqual(expected);
  });

});
