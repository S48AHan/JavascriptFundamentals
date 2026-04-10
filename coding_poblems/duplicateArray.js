const duplicateArr = (arr) => {
  const seen = new Set();
  const duplicate = new Set();
  for (const i of arr) {
    if (seen.has(i)) {
      duplicate.add(i);
    } else seen.add(i);
  }
  return [...duplicate];
};

// console.log(duplicateArr([1,2,3,4,5,2,5]));


// Write a function to remove duplicates from an array.

const removeDuplicateArr = (arr) => {
  const seen = new Set();
  const duplicate = new Set();
  for (const i of arr) {
    if (seen.has(i)) {
      duplicate.add(i);
    } else seen.add(i);
  }
  return [...seen];
};

console.log(removeDuplicateArr([1, 2, 3, 4, 5, 2, 5]));
