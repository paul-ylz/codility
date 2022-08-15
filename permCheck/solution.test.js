const v1 = require('./solution');

describe("v1", () => {
  test("given example", () => {
    expect(v1([4,1,3,2])).toBe(1)
  });

  test("given example", () => {
    expect(v1([4,1,3])).toBe(0)
  });

  test("five numbers starting with two", () => {
    expect(v1([4,5,3,2,6])).toBe(0)
  });
})
