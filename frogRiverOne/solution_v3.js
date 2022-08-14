
function solution(X, A) {

    // build counts of leaf positions
    const counts = {};
    
    for (let time=0; time<A.length; time++) {
        counts[A[time]] = counts[A[time]] + 1 || 0;

    }
    // return early if we know that the bridge is not completed
    if (Object.keys(counts).length !== X) {
            return -1
    }

    // work back from the end of the list, checking number of occurences.
    // if occurence count was 1, then it was a critical piece.
    // hence the first critical piece from the end of the list is the time 
    // when the bridge was complete
    for (let time=A.length-1; time >= X; time--) {
        if (counts[A[time]] === 1) {
            return time-1

        }
    }
}

// feedback
// fails correctness
// returning undefined on (1, [1]) for example
//
