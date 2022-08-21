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
// Strategy:
// Build prefix-sum array that tracks the number of occurrences of A, C and G at each index of S. Ignore nucleotide "T" since it's the largest, and therefore default impact).
//  For each query, check if there is a change in count for the query's index range. A change represents occurence of the nucleotide.
const impactFactorMap = {
  'A': 1, 'C': 2, 'G': 3, 'T': 4
};

function solution(S, P, Q) {
  const N = S.length;
  let trackCount = new Array(N+1);
  trackCount[0] = { A: 0, C: 0, G: 0 };

  for (let i=0; i<N; i++) {
    count = {
      A: trackCount[i]['A'] + (S[i] === 'A' ? 1 : 0),
      C: trackCount[i]['C'] + (S[i] === 'C' ? 1 : 0),
      G: trackCount[i]['G'] + (S[i] === 'G' ? 1 : 0),
    }
    trackCount[i+1] = count
  }

  const M = P.length;
  let result = new Array(M)
  const nucleotides = 'ACG';
  for (let j=0; j<M; j++) {
    const p = P[j];
    const q = Q[j];

    for (let k=0; k<nucleotides.length; k++) {
      const nucleotide = nucleotides[k]
      if (trackCount[q+1][nucleotide] > trackCount[p+1][nucleotide]) {
        result[j] = impactFactorMap[nucleotide]
        break
      }
      result[j] = 4
    }

  }
  return result
}

module.exports = solution

