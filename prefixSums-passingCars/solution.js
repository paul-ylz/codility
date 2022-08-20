function solution(A) {
  let passes = 0;
  let eastBoundCars = 0;
  for (let i=0; i<A.length; i++) {
    const car = A[i];

    if (isEastBound(car)) {
      eastBoundCars++;
      continue;
    }

    if (isWestBound(car)) {
      passes += eastBoundCars
    };

    if (passes > 1E9) {
      return -1
    }
  }
  return passes;
}

function isEastBound(car) {
  return car === 0
}

function isWestBound(car) {
  return car === 1
}

module.exports = solution;
