// OOP

//+++++++++++++++++++++++++++++++ example of object literal +++++++++++++++++++++++++

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//         console.log(`Username: ${this.username}`);
//         console.log(this);
//     }

// }

// console.log(user)
// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


//++++++++++++++++++++++++++++++++++++ Constructor Function +++++++++++++++++++++++
// constructor function gives us a new instance(copy) everytime

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this                               ///by default it returns the value, so there is no need to write "return this"
}

const userOne = new User("hitesh", 12, true)                           // new keywords creates a new instance & does not over ride the previous instance values
const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);
console.log(userTwo.constructor);