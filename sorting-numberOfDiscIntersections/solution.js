// Assumptions
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [0..2,147,483,647].
//
// solution returns the number of intersecting pairs of discs, where each element of A
// represents the radius of disc a.
function solution(A) {
  const N = A.length
  let result = 0
  let startPoints = new Array(N).fill(0)
  let endPoints = new Array(N).fill(0)

  for (let i=0; i<N; i++) {
    // bound the start and end points by indices of the array
    const s = 0 > A[i] - i ? i - A[i] : 0
    const e = N-1 > A[i] + i ? i + A[i] : N-1;
    startPoints[s]++
    endPoints[e]++
  }

  // active tracks the count of discs where the current index lies within start and end points.
  let active = 0
  for (let i=0; i<N; i++) {
    // if there are any new discs starting at this point
    if (startPoints[i] > 0 ) {
      // add number of intersections between active discs and new discs
      result += active * startPoints[i]
      // add the number of intersections between just the new discs
      // but why is a sum formula used?
      result += startPoints[i] * (startPoints[i]-1) / 2
      if (10000000 < result) { return -1 }

      active += startPoints[i]
    }
    active -= endPoints[i]
  }
  return result
}

module.exports = solution

