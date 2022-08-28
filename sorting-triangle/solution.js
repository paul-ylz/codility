// Assumptions:
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
//
// solution returns 1 if there exists a triangular triplet for array A
// An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:
//
// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].
//
function solution(A) {
  const N = A.length

  A.sort((a, b) => b - a)
  for (let p=0; p<N-2; p++) {
    if (isTriangular(A, p, p+1, p+2)) {
      return 1
    }
  }
  return 0
}


function isTriangular(A, P, Q, R) {
  return A[P] + A[Q] > A[R] &&
    A[Q] + A[R] > A[P] &&
    A[R] + A[P] > A[Q]
}

module.exports = { solution, isTriangular }
