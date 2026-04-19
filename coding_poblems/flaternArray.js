//[1, [2, [3, 4]], 5]
const arr = [1, [2, [3, 4]], 5];
const flatternArray = (arr) => {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatternArray(item));
    } else result.push(item);
  }
  return result;
};

console.log(flatternArray(arr));
