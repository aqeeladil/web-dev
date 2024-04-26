




/*
//callback function (callback is a Async JS)
setTimeout(() => {
    console.log('Hey Helllo')
}, 3000);
*/


/*
//first class function (using function as a variable value)
//Example-1
function abcd(a){
    a(); 
};
abcd(()=>{
    console.log('Hello Aqeel')
});
//Example-2
var m23 = function(){};
setInterval(function(){ 
    
}, 1000);
*/


/*
//higher order function
//(functions which accept a function in a parameter or return a function or both)
//(Example: forEach method always takes another function inside it, so it is a higher order fnc)
//In below 3 examples, abcd function is higher order fnc
arr.forEach(function(){});
function abcd(val) { }; abcd(function(){});
function abcd(val) { return function(){} };
*/


/*
//constructor function
//(the function in which "this" is used and you use "new" keyword to call that function)
//(we use constructor function where there is a need of a lot of elements with same properties)
function biscuit() {
    this.width = 12;
    this.height = 22;
    this.taste = 'sugary';
    this.color = 'brown';
}
let bis1 = new biscuit();
let bis2 = new biscuit();
let bis3 = new biscuit();

function kaka() {
    this.name = 'aqeel';
}
var person1 = new kaka();
*/




/*
//new keyword
//("new" means the creation of a blank object, for the constructor fnc that is being called just after 'new' Keyword)
//IIFE
//(Immediately Invoked function expression (to immediately create a function, in away so that we can create a private variable)
//PRIVATE VARIABLE
//(private variable is a variable that cannot be accessed from outside and helps to protect our code. It can only be accessed from inside the function.)
//Check the 2 Examples below

(function (){
    var a = 12;
})

let ans = (function (){
    let b = 12;
    return {
        getter: function(){
            console.log(b);
        },
        setter: function(val){
            a = val;
        }
    }
})()
*/


/*
//prototype (whenever we craete an object, it automatically gets a prototype property)
//prototypal inheritance
var human = {
    canTalk : true,
    canWalk : true,
    canFly : false,
    haveEmotions : true,
    hasFourLegs : false
}
var sheriyansStudent = {
    canMakeAmazingWebsites : true,
    canMakeAwesomeAnimations : true
}
sheriyansStudent.__proto__ = human;
*/


/*
//this, call, apply, bind
//pure & impure fncs
//Example of pure function
function huchi(i){
    return i+2;
}
var ans1 = huchi(3);

//Example of impure function
function calc(val){
    return Math.random()*val
}
var ans2 = calc(2);
var ans3 = calc(2);
*/


// closures


/*
ASYNCRONOUS JAVASCRIPT
//js is single threading language. means it do one task at a time.
//sync means step by step esecution of code in an order
//Async means the simultaneous delivery of all the tasks in the code.
//examples of Async are: setTimeout, setInterval, promises, fetch, axios, XMLHttpRequest
//async is used to avoid the blocking of code.
//sync code is used where we are not sure about the time the server will take to respond to our request.
console.log('hey1');
setTimeout(()=>{
    console.log('hey2')
}, 2000);
console.log('hey3');
*/


/*
//side-stack, main-stack, event-loop
//(js is not asyncronous by default. It works in the side-stack and when all the sync code 
//got executed in the main-stack, the event-loop will take the async code from side-stack 
//and put it in main-stack for execution)
console.log('hey4');
setTimeout(()=>{
    console.log('hey5')
}, 0);
console.log('hey6');
*/


/*
then, catch, callbacks, async await 
(these are used after the async code got executed with
the help of methods like fetch, axios, setTimeOut, setInterval, promises, XMLHttpRequest)
*/


/*
//promises (promises is a pending state feature of js)
//resolve, reject
//a promise can have two conditions, either it can be resolved or rejected
//if resolved (use then)
//if rejected (use catch)
let exp = new Promise((res, rej)=>{
    if(true) {
        return res();
    }
    else{
        return rej();
    }
})
exp.then(()=>{
    console.log('got resolved')
})
exp.catch(()=>{
    console.log('got rejected error')
})
*/


/*
async await (to avoid the use of ".then", we use async await)
async function abcd(){
    await fetch('')
}
*/



// concurrency vs parallelism

// throtelling

