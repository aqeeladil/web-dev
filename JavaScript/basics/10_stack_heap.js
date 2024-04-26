// STACK HEAP MEMORY


// Stack & Heap memory
// stack (for primitive datatype) (here we get a copy of original value)
// heap (for reference datatype) (here we get actual reference of original value)
// stack (the order in which the execution of code is carried out)
// heap memory (where the data of our code is stored)

// Example of stack
let a1 = 'huchi';
let a2 = a1;
console.log(a2);
a2 = 'kaka';
console.log(a1);
console.log(a2);        // means a2 can just copy a1 value.

// Example of heap
let a3 = {me: 'aqeel', id: '123'};
let a4 = a3;
a4.id = '456';
console.log(a3);
console.log(a4);     // this time a4 took the value from from a3 as reference. and change the value in a3 as well
