console.log("Prototypes!");

// Object in JS

{
} //object literals

/*
    {
     "Key":"Value"   //This is a property of a object
    }
*/

/*

const user = {
    "name":"Saber",           //Quotes("") are required for keys containing spaces, hyphens, or some other special formats:
    "address":"Bangladesh",
    "age":34
}

const user2 = {
    name:"Salman",
    address:{
        street:"38/2,West Malibagh",
        country:"Bangladesh",
    },
    age:60,
    hobbies:["Singing","Gaming"],
    "unique-number":"123ADSD"
}

user.age = 27;
console.log(user);
console.log(user.age)
console.log(user2["unique-number"]) /// For special charecters(-, space etc) user2.unique-number will not work 
*/

//Function as a property value = We call that Fn A Method
/*
const user = {
  name: "Saber",
  address: "Bangladesh",
  age: 34,
  magicNumber: function () { ///Method
    return Math.random();
  },
};
console.log(user.magicNumber())
*/

//Constructor Fn
/*
function Car(model,color,year){
    this.model = model;
    this.color = color;
    this.year = year;
    this.wheelNumber= function(){
        return 4;
    }
}
const bmw= new Car("BMW", "Black",2020)
const audi= new Car("Audi", "Red",2026)
console.log(bmw)
console.log(audi)
console.log(audi.wheelNumber())
*/

//composition constructor
/*
function Car(model,color,year,owner){
    this.model = model;
    this.color = color;
    this.year = year;
    this.owner = owner;
    this.wheelNumber= function(){
        return 4;
    }
}

function Owner(name,age){
    this.name= name;
    this.age = age;
}

const saber = new Owner("SAber Ahmed", 27);
const saberCar = new Car("BMW", "White", 2026, saber)
console.log(saberCar)
console.log(saberCar.owner);
saber.age=20
console.log(saberCar)
*/

//Prototype
/*
function Car(model,color,year){
    this.model = model;
    this.color = color;
    this.year = year;
}
const bmw= new Car("BMW", "Black",2020)
console.log(bmw)

Car.prototype.wheelNumber = function(){
    return 4;
}

 console.log(bmw.wheelNumber())


const audi= new Car("Audi", "Red",2026)
console.log(audi.wheelNumber())
*/


//class
// /*
class Car {
  constructor(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
  }
  wheelNumber(){
    return 4;
  }
}

const bmwCar = new Car("BMW", "REd",2024)
console.log(bmwCar)

class LuxuryCar extends Car{
    constructor(model,color,year){
        super(model,color,year)
    }
    isLuxury(){
        return true
    }
}

const lc = new LuxuryCar("BMW","blue",2024)
console.log(lc)
console.log(lc.wheelNumber())

const vehicle = {
    isTwoWheeler : false,
    isLuxury: false,
    showInfo: function(){
        return `The ${this.name} is ${this.color}. 
        Is it two wheeler? ${this.isTwoWheeler} 
        Is it Luxury? ${this.isLuxury}`
    }
}

const car = Object.create(vehicle);
car.name = "BMW";
car.color = "Orange";
car.isTwoWheeler= true;
car.isLuxury=true;
console.log(car);eewr
console.log(car.showInfo())
const newCar = Object.create(vehicle,{headlight:{value:2}});
console.log(newCar)
// */