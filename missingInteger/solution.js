// N is an int within [1..100,000]
// each element of A is an int within [-1,000,000..1,000,000]
function solution(A) {
  let counts = [];
  for (let i=0; i<A.length; i++) {
    if (A[i] <= 0) {
      continue
    }
    counts[A[i]-1] = counts[A[i]-1] + 1 || 1
  }
  console.log("debug counts:" , counts);

  if (counts.length === 0) {
    return 1
  }

  for (let j=0; j<counts.length; j++) {
    if (!counts[j]) {
      return j+1;
    }
  }
  return counts.length + 1;
}

module.exports = solution;
