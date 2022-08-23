// Assumptions:
// 1. N is an integer within the range [2..100,000];
// 2. each element of array A is an integer within the range [−10,000..10,000].
//
// In Scope:
// given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.
//
function solution(A) {
  const N = A.length;
  let minAvgIdx = [10000, 0] // minAverage, startPosition

  for (let i=0; i<N-2; i++) {
    // scan successive pairs.
    const avg2 = (A[i] + A[i+1]) / 2
    if (avg2 < minAvgIdx[0]) {
      minAvgIdx = [avg2, i]
    }

    // scan successive triples.
    const avg3 = (A[i] + A[i+1] + A[i+2]) / 3
    if (avg3 < minAvgIdx[0]) {
      minAvgIdx = [avg3, i]
    }
  }
  // as we loop only N-2 times, the final pair was not checked yet
  const finalAvg2 = (A[N-2] + A[N-1]) / 2
  if (finalAvg2 < minAvgIdx[0]) {
    minAvgIdx = [finalAvg2, N-2]
  }

  return minAvgIdx[1]
};

module.exports = solution;
