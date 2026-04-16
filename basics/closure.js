// let str = "saber";
// console.log(str);


// outer();
// function outer() {
//   console.log("Outer");

//   function inner() {
//     console.log("innner");
//   }
//   inner();
// }




// Function inside another function
// Inner function remembers outer variables
// Works even after outer function finishes

function outer() {
  let a = 10;

  console.log("Outer");
  return function inner() {
    console.log(a);
    
  console.log("Inner");
  };
}

const fn = outer();
// fn(); // 10 will be printed because of closure


// “A closure is a function that remembers variables from its outer scope even after the outer function has executed.”