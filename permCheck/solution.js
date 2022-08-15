// loop through A
// for each item, mark it seen in an object
// track the largest and the smallest
// the diff between largest and smallest should equal A.length-1
// if any item is seen twice, it's not a permutation
//
function solution(A) {
  const seen = {};
  let min = 1000000000
  let max = 1

  for (let i=0; i<A.length; i++) {
    const el = A[i];
    if (seen[el]) {
      return 0
    }
    seen[el] = true;
    min = Math.min(min, el)
    max = Math.max(max, el)
  }
  if ((max-min) === A.length-1) {
    return 1
  }
  return 0
}

module.exports = solution;
