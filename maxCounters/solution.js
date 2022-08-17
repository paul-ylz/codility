function solution(N, A) {
  let maxCounter = 0;
  let counters = new Array(N).fill(0);

  for (let i=0; i<A.length; i++) {
    if (A[i] === N + 1) {
      counters = new Array(N).fill(maxCounter);

    } else if (A[i] >= 1 && A[i] <= N) {
      counters[A[i]-1]++;
      maxCounter = Math.max(maxCounter, counters[A[i]-1]);

    } else {

      throw "Received invalid value: " + A[i]
    }
  }

  return counters
}

module.exports = solution;
