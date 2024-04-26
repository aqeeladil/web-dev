// ARRAY
// new, push, pop, unshift, shift, slice, splice, indexof, includes, join



const myArr = [2, 4, 6, 8, 10];
//console.log(myArr[0]);

const myArr2 = new Array(1, 3, 5, 7, 9);
// console.log(myArr2);
// console.log(myArr2[0]);
// console.log(myArr2.length);

// ++++++++++++++++++++++++++++++++++++++

myArr2.push(11);
//console.log(myArr2);

myArr2.pop();
//console.log(myArr2);

myArr2.unshift(0);
//console.log(myArr2);

myArr2.shift();
//console.log(myArr2);


// ++++++++++++++++++++++++++++++++++++++

// console.log(myArr2.includes(7));

// console.log(myArr2.indexOf(100));
// console.log(myArr2.indexOf(5));

// ++++++++++++++++++++++++++++++++++++

// const newArr = myArr2.join();

// console.log(myArr2);
// console.log(newArr);
// console.log(typeof newArr);


// ++++++++++++++++++++++++++++++++++++++++

// let huchi = [45, 55, 65, 75, 85];
// console.log(huchi);

// console.log('Slice', huchi.slice(1,3));     //slice only copies from original array // It took values from 1 to 3 index
// console.log(huchi);

// console.log('Splice', huchi.splice(1,3));   //splice make changes in the original array // it starts from 1 index, and covers three values
// console.log(huchi);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// how arrays are made behind the scenes
// type of array is object

// var a = [10,20,30];
// console.log(typeof(a));
// var b = {0:10, 1:20, 2:30};
// console.log(b);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//how we can make negative indexes arrays in js

// let a = [10,20,30];
// a[-1]=40;
// let c = {};
// let b = [];
// console.log(a);
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(Array.isArray([]));
// console.log(Array.isArray({}));




