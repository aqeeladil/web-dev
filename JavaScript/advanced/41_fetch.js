// fetch in JS

// https://blog.logrocket.com/fetch-api-node-js/#:~:text=The%20Fetch%20API%20was%20a,the%20Fetch%20API%20to%20Node.
// https://fetch.spec.whatwg.org/

// these code lines are used from previous lecture


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


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response3) => {
//     return response3.json()
// })
// .then((data3) => {
//     console.log(data3);
// })
// .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.