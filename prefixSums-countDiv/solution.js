function solution(A, B, K) {
  let divisibleCount = 0;
  for (let i = A; i <= B; i++) {
    if (i % K === 0) {
      divisibleCount ++;
    }
  }

  return divisibleCount;
}

module.exports = solution;
