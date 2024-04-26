// VARIABLES 
// let, const, var


const accountId = 1;    
let accountEmail = 'huchi@google.com';
var accountPasswd = '1234';
let accountbalance ;


// const variable is unchangeable
// Prefer not to use var because of issue in block scope & functional scope

console.table([accountId, accountEmail, accountPasswd, accountbalance]);


/*
var comes in es5
let, const comes in es6
scoping
let is braces scoped
var is function scoped
browser context api (window, stack, heap memory)
var adds itself to the window object
let & const doesn't adds to window object
window object is a box of features given by browser to use with js (for example alert, prompt, console.log)
*/