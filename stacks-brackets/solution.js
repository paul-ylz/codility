// solution returns 1 if S is properly nested and 0 otherwise.
// Assumptions:
// N is an integer within the range [0..200,000];
// string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
function solution(S) {
  let permitted = []
  let openingBrackets = ['(', '{', '[']
  const closingPairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (let i=0; i<S.length; i++) {
    const char = S[i]
    //console.log("char: ", char, "permitted: ", permitted)
    if (openingBrackets.includes(char)) {
      permitted.push(closingPairs[char])
    } else {
      if (permitted[permitted.length-1] === char) {
        permitted.pop()
      } else {
        return 0
      }
    }
  }
  if (permitted.length !== 0) {
    return 0
  }
  return 1
}

module.exports = solution

