// Assumptions
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [0..2,147,483,647].
//
// solution returns the number of intersecting pairs of discs, where each element of A
// represents the radius of disc a.
function solution(A) {
  const N = A.length
  let intersectCount = 0

  // for each disc
  for (let i=0; i<N; i++) {
    let iRightEdge = i+A[i]
    // compare to each disc ahead of it
    // disc i's center is always left of disc j's, therefore if it's right edge touches or exceeds j's left edge, there is an intersection.
    for (let j=i+1; j<N; j++) {
      let jLeftEdge = j-A[j]
      if (iRightEdge >= jLeftEdge) {
        intersectCount++
        if (intersectCount > 10000000) {
          return -1
        }
      }
    }
  }
  return intersectCount

}

module.exports = solution

