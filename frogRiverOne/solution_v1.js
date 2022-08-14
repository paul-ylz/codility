// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {

    // get counts of leaf positions
    const counts = Array(X).fill(0)
    
    for (let time=0; time<A.length; time++) {
        counts[A[time]-1]++
        // if any count is < 1, the bridge is not yet complete
        for (let j=0; j<counts.length; j++) {
            if (counts[j] < 1) {
                break
            }
            if (j === counts.length-1) {
                return time
            }
        }

    }
    return -1
}

// feedback:
// fails large permutation: timeout
// fails large range: timeout
// 
