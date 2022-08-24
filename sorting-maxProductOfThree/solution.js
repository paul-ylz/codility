// Given:
// N is an integer within the range [3..100,000];
// each element of array A is an integer within the range [−1,000..1,000].
//
// solution returns the product of the maximal triplet to be found in array A.
function solution(A) {
  A.sort()
  const N = A.length
  const large1 = A[N-1]
  const large2 = A[N-2]
  const large3 = A[N-3]

  return large1 * large2 * large3
}

module.exports = solution
