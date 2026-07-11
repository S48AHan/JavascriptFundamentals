console.log("Day 2!");



// var : functional Scoped >>>>>>>>>> not used in modern dev >>>>>>>>> can be redeclared;

// var name= "Saber";
// console.log(name);
// var name = "Sanjana";
// console.log(name);

// let : block Scoped  >>>>>>>>> can be reassigned;

// let name= "Saber";
// console.log(name);
//  name = "Sanjana";
// console.log(name);


// const : block Scoped  >>>>>>>>> can not be reassigned;

const name= "Saber";
console.log(name);
 name = "Sanjana";
console.log(name);


// Primitive Data types:
// 1. Number
// 2. String
// 3. Bigint
// 4. Undefined
// 5. Null
// 6. Boolean
// 7. Symbol

// Non-Primitive :
// 1. Object 
// 2. Array
// 3. Function

// JS works like this:
// 1. Tokenizing: break the code snippet into different tokens.
// 2. Parsing: JS creates AST (Abstract Syntax Tree) structure with all these tokens.
// 3. Code Generation: From AST Machine Code will be generated.