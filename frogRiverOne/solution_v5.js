function solution(X, A) {
  const tracker = new Set();
  for (let i=0; i<A.length; i++) {
    tracker.add(A[i]);
    if (tracker.size === X) {
      return i
    }
  }
  return -1
}

module.exports = solution;
