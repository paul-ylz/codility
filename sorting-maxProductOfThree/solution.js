// Given:
// N is an integer within the range [3..100,000];
// each element of array A is an integer within the range [−1,000..1,000].
//
// solution returns the product of the maximal triplet to be found in array A.
function solution(A) {

  let large1 = largestUpTo(A, 100000+1)
  let large2 = largestUpTo(A, large1)
  let large3 = largestUpTo(A, large2)

  return large1 * large2 * large3
}

function largestUpTo(A, x) {
  let largest = 0
  for (let i=0; i<A.length; i++) {
    if (A[i] > largest && A[i] < x) {
      largest = A[i]
    }
  }
  return largest
}

module.exports = solution
