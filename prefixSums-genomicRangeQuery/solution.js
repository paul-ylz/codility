// Given:
// N is an integer within the range [1..100,000];
// M is an integer within the range [1..50,000];
// each element of arrays P and Q is an integer within the range [0..N - 1];
// P[K] ≤ Q[K], where 0 ≤ K < M;
// string S consists only of upper-case English letters A, C, G, T.
// P and Q const of M integers
// S consists of N characters
// Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively.
//
const impactFactorMap = {
  'A': 1, 'C': 2, 'G': 3, 'T': 4
};

function solution(S, P, Q) {
  const N = S.length;
  const impactFactors = new Array(S.length)
  for (let i=0; i<N; i++) {
    impactFactors[i] = impactFactorMap[S[i]]
  }

  const M = P.length;
  let result = new Array(M)
  for (let j=0; j<M; j++) {
    const p = P[j];
    const q = Q[j];
    let impactFactor = impactFactors[p]
    for (k=p; k<=q; k++) {
      impactFactor = Math.min(impactFactor, impactFactors[k])
    }
    result[j] = impactFactor;
  }
  return result
}

module.exports = solution

