// FUNCTIONS & PARAMETERS


//++++++++++++++++++++++++++++++++++++++++++++++

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName();


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addTwoNumbers (num1, num2) {
    return (num1 + num2);
    console.log('Hello');          // any argument passed after "return" will not be executed.
}

// console.log(addTwoNumbers(3,4));
// console.log(addTwoNumbers(1,null));

const result = addTwoNumbers(10,2);
// console.log("Result :", result);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++

function logInMessage (username){
    if(username === undefined){                      
        console.log('Please enter a username');
        return
    }
    return `${username} just logged in`
}

// console.log(logInMessage('hitesh'));
// console.log(logInMessage(''));
// console.log(logInMessage());

//+++++++++++++++++++++++++++++++++++++++++++++++

function kaka(naam = 'huchi') {
    
    return `${naam} just logged in`
}

console.log(kaka('hitesh'));
console.log(kaka(''));
console.log(kaka());
