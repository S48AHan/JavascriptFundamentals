function charCount(str) {
  const result = {};

  for (const char of str) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}

console.log(charCount("banana")); 