// GLOBAL & LOCAL SCOPE

let a = 10;
const b = 20;
var c = 30;

// scope {}

if (true) {
    // this is local scope: let, const
    console.log(a);
    console.log(b);
}

// this is global scope: var
console.log(c)


// local scope can access global variable, but global cannot access local variable

