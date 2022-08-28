const { solution, isTriangular } = require('./solution')

describe("sorting - triangle solution", () => {
  test("example input with triangle", () => {
    const A = [10, 2, 5, 1, 8, 20]
    const expected = 1

    expect(solution(A)).toEqual(expected)
  })


  test("example input without triangle", () => {
    const A = [10, 50, 5, 1]
    const expected = 0

    expect(solution(A)).toEqual(expected)
  })

  test("less than 3 items", () => {
    const A = [1,2]
    const expected = 0

    expect(solution(A)).toEqual(expected)
  })
})


describe("isTriangular", () => {
  test("example input", () => {
    const A = [10, 2, 5, 1, 8, 20]
    const P = 0
    const Q = 2
    const R = 4
    expect(isTriangular(A, P, Q, R)).toBeTruthy()
  })

  test("example input non triangular", () => {
    const A = [10, 50, 5, 1]
    const P = 0
    const Q = 1
    const R = 2
    expect(isTriangular(A, P, Q, R)).toBeFalsy()
  })
})
