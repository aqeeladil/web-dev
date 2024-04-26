// OBJECTS



// Method(a function inside an object is called method)

// var obj30 = {
//     baatkaro : function(){}
// }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Objects can be declared in two ways : Literals , Consructors

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Singleton (object created through constructor method)

// Object Constructors 
// Example: 
Object.create

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Object Literals 

const mysym = Symbol('key1')

const myUser = {
    myname: 'Aqeel',
    'full name': 'Aqeel Adil',
    [mysym]: 'password1',
    mysym: 'pass1',
    age: 24,
    email: 'huchikaka@gmail.com',
    isloggedin: false,
};

// console.log(myUser.email) ;
// console.log(myUser['email']) ;    //this method is more preffered

// console.log(myUser['full name']);
// console.log(myUser['mysym']);
// console.log(myUser[mysym]);     //symbol type

// console.log(typeof myUser['mysym']);
// console.log(typeof myUser[mysym]);  //symbol type


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

myUser.email = 'kaka@gmail.com';
// Object.freeze(myUser);     //this way, no one will be able to make changes to our constant


//console.log(myUser);

myUser.greeting = ()=>{
    console.log(`Helloo My JSUSER`);
}
myUser.greetingTwo = ()=>{
    console.log(`Hellooo My JSUSER your age is, ${this.age}`);
}

myUser.greeting();
myUser.greetingTwo();


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//updating & deleting object properties

let obj3 = {me:'kaka', age:12, gender:'Male'};
obj3.me='huchi';
delete obj3.age;
//console.log(obj3);