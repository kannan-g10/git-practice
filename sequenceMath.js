const sequenceOfArray = (arr) => {
  let arith = new Set();
  let geo = new Set();
  for (let i = 1; i < arr.length; i++) {
    let arithNumber = arr[i] - arr[i - 1];
    arith.add(arithNumber);
    let geoNumber = arr[i] / arr[i - 1];
    geo.add(geoNumber);
  }
  if (arith.size === 1) return "Arithmetic";
  else if (geo.size === 1) return "Geometric";
  return -1;
};
console.log(sequenceOfArray([2, 4, 6, 8]));
console.log(sequenceOfArray([3, 9, 27]));
console.log(sequenceOfArray([2, 5, 14, 89]));
