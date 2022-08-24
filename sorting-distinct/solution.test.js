const solution = require('./solution')

describe("sorting - distinct", () => {
  test("example input", () => {
    const A = [2, 1, 1, 2, 3, 1]
    const expected = 3

    expect(solution(A)).toEqual(3)
  });
});
