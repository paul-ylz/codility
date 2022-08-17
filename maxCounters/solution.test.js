const v1 = require('./solution');

describe('maxCounters', () => {
  test('example', () => {
    const A = [3, 4, 4, 6, 1, 4, 4];
    const N = 5;
    const expected = [3, 2, 2, 4, 2];

    expect(v1(N, A)).toEqual(expected);
  });


  test('another example', () => {
    const A = [2, 7, 4, 5, 7, 2]
    const N = 6;
    const expected = [2, 3, 2, 2, 2, 2]

    expect(v1(N, A)).toEqual(expected);
  });
});
