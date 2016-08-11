let uniq = function(arr) {
  let uniqArr = [];
  arr.forEach((el) => {
    if (uniqArr.includes(el) === false) {
      uniqArr.push(el);
    }
  });

  return uniqArr;
};

console.log(uniq([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
