
function solution(X, A) {

    // build counts of leaf positions
    const counts = {};
    
    for (let time=0; time<A.length; time++) {
        counts[A[time]] = counts[A[time]] + 1 || 0;

        // if there are as many keys as there are positions to fill, then the bridge is complete.
        if (Object.keys(counts).length === X) {
            return time
        }
    }
    return -1
}

// feedback
// fails all performance tests worse than v1
// Complexity was O(n**2)
