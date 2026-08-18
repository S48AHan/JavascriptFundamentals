for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

// You get 3 3 3 because two things happen:
// var creates one shared i variable for the entire loop.
// setTimeout callbacks run after the synchronous loop has finished.

// i = 0;
// i = 1;
// i = 2;
// i = 3; 

// Then all three callbacks execute. They share the same i, whose current value is 3.

// let creates a new binding of i for each loop iteration. Each callback closes over its own binding.