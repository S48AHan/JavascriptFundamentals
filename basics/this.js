// console.log("Global Execution context", this);
// console.log(this === window)

// "use strict";

// //function declaration
// function fun() {
//     console.log("Inside function", this);
// }
// fun();

// implicit binding : the context of the this in the method is bound to the object

// //OBject method= inside of an object - implicit binding
// const employee = {
//     id: "EMP001",
//     name: "Saber",
//     designation: "Software Engineer",
//     returnThis: function () {//method
//         return this;
//     },
//     getData: function () {

//         return `${this.name} is a ${this.designation}`
//     }
// }

// console.log(employee.returnThis())
// console.log(employee.getData())

// My implicit this:
// const myself = {
//   name: "Saber",
//   age: 26,
//   getInfo: function(){
//     return this;
//   },
//   getIntro(){
//     return `${this.name} is ${this.age} years old.`
//   },
//   getFn(){
//     return this.getIntro();
//   }
// }
// console.log(myself.name);
// console.log(myself.getFn());
// console.log(myself.getIntro());
// console.log(myself.getInfo())

//Method : A method is a function stored as a property of an object.

// const goku = {
//   name: "Kakarot",
//   power: 100,
// };

// const vegeta = {
//   name: "vegeta",
//   power: 90,
// };

// function getPower(object) {
//   object.getStrongBeingData = function () {
//     console.log(`${this.name}'s power is  ${this.power}`);
//   };
//   console.log(object);
// }

// getPower(goku);
// goku.getStrongBeingData();

// getPower(vegeta);
// vegeta.getStrongBeingData();

//inside function - this Always points to global scope Window obj(without strict mode) || 'undefined' while strict mode

// function sayname() {
//   console.log("this is in fn:", this);
// }
// sayname();

// function outer(a) {
//   console.log("Outer fn:", this);
//   return function inner(b) {
//     console.log("Inner fn:", this);
//   };
// }

// const outerResult  = outer(5)
// outerResult()

// Arrow function : ALWAYS bound the parent scope so ALWAYS is pointing 'Window' or the parent scope
// Arrow functions do not create their own this.

// const getFood = () => this;
// console.log("Arrow fn:", getFood());

// const food = {
//   name: "Mango",
//   color: "Yellow",
//   getDescArrow: () => `${this.name} is ${this.color}`, //arrow fn -> undefined for i

//   getDesc: function () {
//     return `${this.name} is ${this.color}`;
//   },
//   getDescArrowWorking: function (){
//     return () => `${this.name} is ${this.color}`;
//   }
// };

// console.log(food.getDescArrow());
// console.log(food.getDesc());
// const arrowfn = food.getDescArrowWorking();
// console.log(arrowfn());











//Explicit binding- call , apply , bind

function greeting() {
  console.log(`Hello, ${this.name} belongs to ${this.address}`);
}

const user = {
  name: "Saber",
  address: "Malibagh, dhaka",
};

greeting.call(user);

function likes  (hobby1, hobby2, hobby3, hobby4) {
  console.log(this.name + " likes " + hobby1 + " & " + hobby2 + " & " + hobby3 + " & " + hobby4 );
};
likes.call(user, "Gaming", "Coding");

// call → executes immediately => Fn.call(obj,parameters1,parameters2)|| Problem: if there are 10/4 params
//                                                                       then the comma separated will be very large

const hobbiesToApply = ["Gaming", "Coding", "Reading", "Sketching"]
likes.apply(user,hobbiesToApply)
// apply → executes immediately, arguments array-like => fn.apply(ibj, array)


// bind → returns a new function || When a fn is needed to give result again and again

function newLikes  (hobby1, hobby2) {
  console.log("New "+this.name + " likes " + hobby1 + " & " + hobby2  );
};

newLikes.call(user,"Dancing","Singing")


const newFn = newLikes.bind(user,"Dancing","Singing");
newFn();

newFn();












//constructor

const Cartoon = function(name, animal){
  this.name = name;
  this.animal = animal;
  this.log = function(){
    console.log(this.name+ ' is a '+this.animal)
  }
}

const tomCartoon= new Cartoon("Tom", "cat");
tomCartoon.log()
const jerryCartoon= new Cartoon("Jerry", 'mouse')
jerryCartoon.log()