// SCOPE LEVEL & HOISTING

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//local scope can access global variable, but global cannot access local variable

// function one(){
//     const username = 'hitesh'
//     function two(){
//         const website = 'Youtube'
//         console.log(username)
//     }
//     console.log(website)
//     two()
// }
// one()


// +++++++++++++++++++++hoisting with basic function++++++++++++++++++++++++++++++++++++++

// console.log(addtwo(5));     // means you can access a function before it is declared.

// function addtwo(num){
//     return num + 1
// }

// +++++++++++++++++++++hoisting with expression function+++++++++++++++++++++++++++++

// addthree(3);                   // ReferenceError: Cannot access 'addtwo' before initialization

// const addthree = function(num2){
//     return num2 + 1
// }

