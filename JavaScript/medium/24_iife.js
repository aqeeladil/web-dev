// IMMEDIATELY INVOKED EXPRESSION FUNCTION

// it is used to avoid the pollution created by global scope declarations

(function tea(){                     //this function is called named iife
    console.log('hello friends chai pee lo, garam hee')

} )();                       // it is a must to use semicolon ; after iife. otherwise it will not work


// +++++++++++++++++++ iife with arrow function ++++++++++++++++++++
//these two are examples of simple iife


( () => {
    console.log('DB connected')
} ) ();


//another example

( (name) => {
    console.log(`his name is ${name}`)

})('hitesh chaudhary');