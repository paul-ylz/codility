const solution = require('./solution')

describe("intersecting pairs of discs", () => {
  test("example input", () => {
    const A = [1, 5, 2, 1, 4, 0]
    const expected = 11

    expect(solution(A)).toEqual(expected)
  })

  test("all zeros", () => {
    const A = [0, 0, 0, 0, 0]
    const expected = 0

    expect(solution(A)).toEqual(expected)
  })

  test("all ones, N=6", () => {
    const A = new Array(6).fill(1)
    const expected = 9

    expect(solution(A)).toEqual(expected)
  })

  test("all ones, N=7", () => {
    const A = new Array(7).fill(1)
    const expected = 11

    expect(solution(A)).toEqual(expected)
  })

  test("all ones, N=8", () => {
    const A = new Array(8).fill(1)
    const expected = 13

    expect(solution(A)).toEqual(expected)
  })

  test("all ones, N=100000", () => {
    const A = new Array(100000).fill(1)
    const expected = 199997 // N*2 -3

    expect(solution(A)).toEqual(expected)
  })

  test("more than 10M intersections", () => {
    const A = new Array(100000).fill(2147483647)
    const expected = -1

    expect(solution(A)).toEqual(expected)
  })
})
