// function reverseString(str) {
//   const reverseString = str.split("").reverse().join("");
//   return reverseString;
// }

// console.log(reverseString("Saber"));

//palindrome

const isPalindrome = (str) => {
  const reverseString = str.split("").reverse().join("");
  if (str === reverseString) return true;
  else return false;
};
console.log(isPalindrome("madam"));
console.log(isPalindrome("madam"));
