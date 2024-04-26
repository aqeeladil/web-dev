// THIS & ARROW FUNCTION

// "this" keyword refers to the current context, either local or global

// in the node environment, "this" refers to an empty object {}
// in the browser console, "this refers to "WINDOW" object.

// const user = {
//     username : 'Hitesh',
//     price: 999,

//     welcome : function(){
//         console.log(`${this.username}, welcome to the party`);
//         console.log(this);
//     }
// }

// user.welcome();
// user.username = 'Aqeel';
// user.welcome();

// console.log(this);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function chai (){
//     let username = 'hitesh';
//     console.log(this.username);    // this keyword doesn't work inside a function. It is only useful with an object
    
// }
// chai();



// ++++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++

const addtwo = (n1,n2) => {
    return n1+n2
    
}
console.log(addtwo(3,4));


//+++++++++++++++++++++++++ Implicit return arrow function


const addthree = (n1,n2,n3) => ( n1 + n2 + n3 )     //this method cannot be used to return an object.
    
console.log(addthree(3,4,7));




