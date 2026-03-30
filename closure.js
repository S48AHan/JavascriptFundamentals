// let str = "saber";
// console.log(str);
outer();
function outer() {
  console.log("Outer");

  function inner() {
    console.log("innner");
  }
  inner();
}
