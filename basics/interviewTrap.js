// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// You get 3 3 3 because two things happen:
// var creates one shared i variable for the entire loop.
// setTimeout callbacks run after the synchronous loop has finished.

// i = 0;
// i = 1;
// i = 2;
// i = 3;

// Then all three callbacks execute. They share the same i, whose current value is 3.

// let creates a new binding of i for each loop iteration. Each callback closes over its own binding.

class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  wheelNo() {
    return 4;
  };
}

const saberCar = new Car("Audi", "Red");
console.log(saberCar);

class LuxuryCar extends Car {
  constructor(name, color) {
    super(name, color);
  }
  isLuxury(){
    return true;
  }
}

const rubelCar = new LuxuryCar("BMW","Steel")
console.log(rubelCar)
console.log(rubelCar.wheelNo())
console.log(rubelCar.isLuxury())
