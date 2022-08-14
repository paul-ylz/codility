const solution = require('./solution_v4')

 test('example', () => {
   expect(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6)
 });

 test('returns -1 when path is incomplete', () => {
   expect(solution(3, [1,3,3])).toBe(-1)
 });

 test('one item', () => {
   expect(solution(1, [1])).toBe(1)
 });

