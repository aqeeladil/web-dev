// Promise in JS

/*
The Promise object represents the eventual completion (or failure) of an 
asynchronous operation and its resulting value.means there is a promise 
that a code will execute in the futurepromises help to avoid callback hell
*/


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const promiseOne = new Promise(function(resolve, reject){             //Do an async task //DB calls, cryptography, network calls
//                                                                       // resolve & reject are two parameters for promises
    
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// its not necessary to store promise in a variable

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 3");
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const promiseFour = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour
//  .then(function(user){
//     console.log(user);
//     return user.username
// })
// .then(function (username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log("The promise is either resolved or rejected")
// })


//+++++++++++++++++++++++++ async/await method ++++++++++++++++++++++++++++++++++++++++++++

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "345"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){                     //async/await does not directly handle errors. u need to use try/catch with it
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


//+++++++++++++++++++++++++++++++ fetch with async/await method+++++++++++++++++++++++++++++++++++


// async function getAllUsers(){
//     try {
//         const response2 = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data2 = await response2.json()
//         console.log(data2);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


////+++++++++++++++++++++++++++++++ fetch with .then .catch method+++++++++++++++++++++++++++++++++++


// fetch('https://api.github.com/users/hiteshchoudhary')             // fetch request executes first, then the remaining code will run
// .then((response3) => {
//     return response3.json()
// })
// .then((data3) => {
//     console.log(data3);
// })
// .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.