console.log("async/await!");
console.log("Promise!");

function checkInventory() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Checking the inventory....");
      let inStock = 10;
      resolve(inStock);
      //   reject(new Error("Inventory check failed!"));
    }, 1000);
  });
  return promise;
}

function createOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Creating an Order...");
      reject(new Error("Order check failed!"));
      //   resolve();
    }, 2000);
  });
}

function chargePayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Charging the Payment....");
      resolve();
      //   reject(new Error("Charging failed!"));
    }, 1000);
  });
}

function sendInvoice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Sending the invoice...");
      resolve();
      //   reject(new Error("Invoice failed!"));
    }, 2000);
  });
}

async function main() {
  try {
    const inStock = await checkInventory();
    console.log(inStock);
  } catch (e) {
    console.log(e);
  }
  try {
    await createOrder();
  } catch (error) {
    console.log(error);
  }
  await chargePayment();
  await sendInvoice();
  console.log("Other Process is running!");
}

main();
