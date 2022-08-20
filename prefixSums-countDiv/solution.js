//Given:
//A and B are integers within the range [0..2,000,000,000];
//K is an integer within the range [1..2,000,000,000];
//A ≤ B.
//
// we want the number of times i%K === 0 from 0..B minus
// number of times i%K === 0 from 0..A
//
function solution(A, B, K) {
  const divCountA = Math.floor((A-1) / K); // 2
  const divCountB = Math.floor(B / K); // 5
  return divCountB - divCountA;
}

module.exports = solution;
