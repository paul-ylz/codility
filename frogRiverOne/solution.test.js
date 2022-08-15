const solutionV4 = require('./solution_v4');

describe.skip('solution v4', () => {
 test('example', () => {
   expect(solutionV4(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6)
 });

 test('returns -1 when path is incomplete', () => {
   expect(solutionV4(3, [1,3,3])).toBe(-1)
 });

 test('one item', () => {
   expect(solutionV4(1, [1])).toBe(0)
 });
});

const solutionV5 = require('./solution_v5');
describe('solution v5', () => {
 test('example', () => {
   expect(solutionV5(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6)
 });

 test('returns -1 when path is incomplete', () => {
   expect(solutionV5(3, [1,3,3])).toBe(-1)
 });

 test('one item', () => {
   expect(solutionV5(1, [1])).toBe(0)
 });

 test('two item', () => {
   expect(solutionV5(2, [1,1,2])).toBe(2)
 });
});
