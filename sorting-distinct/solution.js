// Assumptions:
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// solution returns the number of distinct values in array A.
function solution(A) {
  let distinctValues = {}
  for (let i=0; i<A.length; i++) {
    distinctValues[A[i]] = true
  }

  const keys = Object.keys(distinctValues)
  return keys.length
}

module.exports = solution;
