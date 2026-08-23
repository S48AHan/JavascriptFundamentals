console.log("Callback!");

/*
callback - a fn that is passed as an argument to another fn
used to handle asynchronous operations:
1. Reading a File
2. Network requests
3. Interacting with db

Hey when you are done call next
*/

/*
function hello(callback){
    console.log("Hello!")
    callback()
}
// hello()

// function hello(){
//     setTimeout(function(){

//         console.log("Hello!")
//     },3000)
// }
function leave(){
    console.log("Leave")
}
function wait(){
    console.log("wait")
}
function goodbye(){
    console.log("Goodbye!")
}
hello(wait)
// goodbye()
*/

// ASyncronous work flow
function checkInventory(callback) {
  setTimeout(() => {
    console.log("Checking the inventory....");
    callback();
  }, 1000);
}

function createOrder(callback) {
  setTimeout(() => {
    console.log("Creating an Order...");
    const err = new Error("order failed!");
    callback(err);
  }, 2000);
}

function chargePayment(callback) {
  setTimeout(() => {
    console.log("Charging the Payment....");
    const err = null;
    const chargedAmount  = 100;
    callback(err,chargedAmount);
  }, 1000);
}

function sendInvoice() {
  setTimeout(() => {
    console.log("Sending the invoice...");
  }, 2000);
}

function main() {
  //callback hell - difficult readability, and management => Solution : Promise
  checkInventory(() => {
    createOrder((err) => {
      if (err) {
        console.log(err);
      }
      chargePayment((e,ca) => {
        if(e){
            console.log("Handling Eeror")
        }
        console.log(`CHarged= ${ca}`)
        sendInvoice();
      });
    });
  });
}

main();
