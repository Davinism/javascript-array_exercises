let twoSum = function(arr) {
  let idxArr = [];
  for(let i = 0; i < arr.length - 1; i++) {
    for(let i2 = i + 1; i2 < arr.length; i2++) {
      if (arr[i] + arr[i2] === 0) {
        idxArr.push([i, i2]);
      }
    }
  }

  return idxArr;
};

console.log(twoSum([-1, 0, 2, -2, 1]));
