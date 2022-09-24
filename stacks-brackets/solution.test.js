const solution = require('./solution')

describe("stacks and queues - brackets", () => {
  test("example happy path", () => {
    const expected = 1
    const result = solution('{[()()]}')
    expect(result).toEqual(expected)
  })

  test("example sad path", () => {
    const expected = 0
    const result = solution('([)()]')
    expect(result).toEqual(expected)
  })

  test("unclosed parens are invalid", () => {
    const expected = 0
    const result = solution('{{{{')
    expect(result).toEqual(expected)
  })
})

