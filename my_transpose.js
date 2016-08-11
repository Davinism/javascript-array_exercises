let transpose = function (arr) {
  let newMatrix = [];
  for (var i = 0; i < arr.length; i++) {
    let newRow = [];
    for (var j = 0; j < arr.length; j++) {
        newRow.push(arr[j][i]);
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
};

console.log(transpose([
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ]));
