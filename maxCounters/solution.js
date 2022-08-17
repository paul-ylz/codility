// if the number never appears, it's count is the number of times N+1 appears
//
function solution(N, A) {
  let maxCounter = 0;
  let maxToApply = 0;
  let counters = new Array(N).fill(0);

  for (let i=0; i<A.length; i++) {
    if (A[i] === N + 1) {
      maxToApply = maxCounter;


    } else if (A[i] >= 1 && A[i] <= N) {
      if (counters[A[i]-1] < maxToApply) {
        counters[A[i]-1] = maxToApply;
      }
      counters[A[i]-1]++;

      maxCounter = Math.max(maxCounter, counters[A[i]-1]);

    } else {

      throw "Received invalid value: " + A[i]
    }
  }
  for (let i=0; i<counters.length; i++) {
    if (counters[i] < maxToApply) {
      counters[i] = maxToApply;
    }
  }

  return counters
}

module.exports = solution;
