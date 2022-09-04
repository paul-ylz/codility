// Assumptions
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [0..2,147,483,647].
//
// solution returns the number of intersecting pairs of discs, where each element of A
// represents the radius of disc a.
function solution(A) {
  const N = A.length
  let result = 0

  // create an array of intervals (lEdge, rEdge) for each disc, sorted by the left edge.
  let intervals = A.map((el, idx) => [idx-el, idx+el])
    .sort((a,b) => a[0] < b[0] ? -1 : 1)
  // console.log("debug intervals: ", intervals)

  for (let i=0; i<N; i++) {
    const rEdge = intervals[i][1]

    let count
    // how many starting edges are encompassed by this discs right edge? count all until the right edge lies to the left of the next circle's left edge.
    indexOfLastIntersectingDisc = intervals.findIndex(el => el[0] > rEdge)
    if (indexOfLastIntersectingDisc === -1) {
      // every disc intersects
      count = N-(i+1)
    } else {
      count = indexOfLastIntersectingDisc - (i+1)
    }
    result += count
    if (result > 10000000) { return -1 }
    // console.log("debug: ", { i: i, rEdge: rEdge, lastIntersecting: indexOfLastIntersectingDisc, count: count, result: result})
  }
  return result

}

module.exports = solution

