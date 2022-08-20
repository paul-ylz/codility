const solution = require('./solution');

describe('passingCars', () => {
  test('example', () => {
    const A = [0, 1, 0, 1, 1];
    // (0, 1), (0, 3), (0, 4), (2, 3), (2, 4)
    // being pair of cars (P, Q), where 0 ≤ P < Q < N,
    // per the example, P also has to be the zero car, otherwise (1, 2) should also count as passing cars.
    const expected = 5;
    expect(solution(A)).toBe(expected);
  });

  test('beyond 1 billion passes', () => {
    const A = new Array(1E5).fill(0).map((_, idx) => idx % 2 === 0 ? 0 : 1);
    const expected = -1;
    expect(solution(A)).toBe(expected);
  });
});

