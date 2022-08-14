function solution(X, A) {
  if (A.length === 1) {
    return 1
  }
  const counts = {};

  for (let time=0; time<A.length; time++) {
    counts[A[time]] = counts[A[time]] + 1 || 1;
  }
  if (Object.keys(counts).length !== X) {
    return -1
  }


  for (let i=A.length; i >= X; i--) {
    if (counts[A[i-1]] === 1) {
      return i-1
    }
  }
}

module.exports = solution;
