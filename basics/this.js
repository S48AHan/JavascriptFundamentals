console.log("Global Execution context", this);
console.log(this === window)

//function declaration
function fun() {
    console.log("Inside function", this);
}
fun();


//OBject method= inside of an object - implicit binding
const employee = {
    id: "EMP001",
    name: "Saber",
    designation: "Software Engineer",
    returnThis: function () {//method
        return this;
    },
    getData: function () {

        return `${this.name} is a ${this.designation}`
    }
}

console.log(employee.returnThis())
console.log(employee.getData())






const goku = {
    name: "Kakarot",
    power: 100
}

const vegeta = {
    name: "vegeta",
    power: 90
}

function getPower(object) {
    object.getStrongBeingData = function () {
        console.log(`${this.name}'s power is  ${this.power}`)
    }
    console.log(object);
}

getPower(goku);
goku.getStrongBeingData();
d
getPower(vegeta);
vegeta.getStrongBeingData();