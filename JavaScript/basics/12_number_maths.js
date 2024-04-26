// NUMBER & MATHS


const score1 = 400;
console.log(typeof score1);

const score2 = new Number(500);
console.log(score2);
console.log(typeof score2);

console.log(score2.toString());
console.log(score2.toString().length);
console.log(score2.toFixed(2));

// +++++++++++++++++++++++++++++++++++++++++++

let mynum = 34.6789;
console.log(mynum.toPrecision(4));
console.log(mynum.toPrecision(3));
console.log(mynum.toPrecision(2));
console.log(mynum.toPrecision(1));


// ++++++++++++++++++++++++++++++++++++


let yiu = 1000000;
console.log(yiu.toLocaleString());   //usa style
console.log(yiu.toLocaleString('en-IN'));  // indian style


// ++++++++++++++++++++++++++++++++++++++

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

// +++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(3.4));
console.log(Math.ceil(3.4));
console.log(Math.floor(3.4));

// +++++++++++++++++++++++++++++++++++

console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));

// +++++++++++++++++++++++++++++++++++=

console.log(Math.random());
console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1);
console.log(Math.round (Math.random() * 60) + 1);

let min = 10;
let max = 20;
console.log(Math.round (Math.random() * (max -min + 1)) + min);