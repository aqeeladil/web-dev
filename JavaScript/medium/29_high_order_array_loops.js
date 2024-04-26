// HIGH ORDER ARRAY LOOPS


let thisArr = [1,2,3,4,5];

// for (const i of thisArr){
//     console.log(i)
// }

// +++++++++++++++++++ for of loops +++++++++++++++++

const greetings = 'Hello World';

// for (let greet of greetings){
//     console.log(greet)
// }


// +++++++++++++++++++++ MAP +++++++++++++++++++++++++
// maps are iteratable in for-of loop

// const a = new Map()
// a.set('IN', 'India')
// a.set('USA', 'United States of America')
// a.set('FR', 'France')
// a.set('IN', 'India')

// console.log(a)

// for (const [key, value] of a){
//     console.log(`${key} :- ${value}`);
// }


// ++++++++++++++++++ Objects are not iteratable ++++++++++++++++++++++
// this example will give error 

// let myObj = {
//     name : 'huchi',
//     age : 34
// }

// for (let i of myObj){
//     console.log(`${key} :- ${value}`);

// }


// ++++++++++++++++++++++++ for-in loops ++++++++++++++++++++++++++

// let ewwObj = {
//     js : 'javascript',
//     cpp : 'C++',
//     GO : 'golang'
// }

// for (let i in ewwObj){
//     console.log(`${i} ;- ${ewwObj[i]}`);
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let ewwArr = ['javascript', 'C++', 'Golang' ]

// for (let k in ewwArr){
//     console.log(`${k} value is ${ewwArr[k]}`);
// }


// +++++++++++++++++++++++++++

// maps are not iteratable for forin loop


// +++++++++++++++++++++++++++++++++++ forEach loop +++++++++++++++++++++++++

// const coding = ['js', 'java', 'go', 'python']

// coding.forEach( item => {
//     console.log(item)
    
// });

// coding.forEach( (item, index, arr) => {                        // another method of writing 
//     console.log(item, index, arr)
    
// });


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const myCode = [
//     {
//         lang : 'java',
//         file: 'jv'
//     },
//     {
//         lang : 'javascript',
//         file: 'js'
//     },
//     {
//         lang : 'python',
//         file: 'py'
//     }
// ]

// myCode.forEach( obj => {
//     console.log(obj.lang)
//     console.log(obj.file)

// })


//+++++++++++++++++++++++++++++++++ foreach, for-in, for-of, do-while +++++++++++++++++++++++++++++++++++++++++


//foreach is used for arrays
// let a=[1, 2, 3, 4];
// a.forEach((i) => {
//     console.log(i*5)
// });

//forin is used for objects
// let obj = {name:'huchi', age:53};
// for(let i in obj){
//     console.log(i);
//     console.log(obj[i]);
//     console.log(i, obj[i]);
// };

//do-while
// let b = 2; 
// do {
//     console.log(b); 
//     b++;
// } while(b<=12) ;
