//
// Given:
// N is an integer within the range [3..100,000];
// each element of array A is an integer within the range [−1,000..1,000].
//
// Possible combinations:
// 1. All positive and > 0
// Take the 3 biggest numbers
//
// 2. 1 negative, 2 positive [ -2, 0, 1, 2]
// Take the smallest numbers
//
// 3. 2 negative, 1 positive [-3, -2, 0, 1, 2, 4]
// Take biggest absolute numbers
//
// Calling sort() will cause performance to fail.
//
// solution returns the product of the maximal triplet to be found in array A.
function solution(A) {
  // do a count sort first
  const N = A.length
  let count = new Array(2001).fill(0)
  const rangeOffset = 1000

  // count tracks counts for numbers in the range [-1000..1000]
  for (let i=0; i<N; i++) {
    count[A[i]+rangeOffset]++
  }

  let p = 0
  for (let i=0; i<2001; i++) {
    for (let j=0; j < count[i]; j++) {
      A[p] = i - rangeOffset
      p++
    }
  }

  const allPositiveMax = A[N-1] * A[N-2] * A[N-3]

  let twoNegativesMax = 0
  if (A[0] < 0 && A[1] < 0) {
    twoNegativesMax = A[0] * A[1] * A[N-1]
  }

  return Math.max(allPositiveMax, twoNegativesMax)
}

module.exports = solution
