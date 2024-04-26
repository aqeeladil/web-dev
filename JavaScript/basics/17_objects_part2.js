// OBJECTS 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Example of Singleton Object (Consructor method)
const huchi1 = new Object();
//console.log(huchi1);
huchi1.id = 1;
huchi1.name = 'Aqeel';
huchi1.isLoggedIn = false;
//console.log(huchi1);

// Example of non-singleton object (literal method)
const huchi2 = {};
// console.log(huchi2);
huchi1.id = 2;
huchi1.name = 'Adil';
huchi1.isLoggedIn = true;
// console.log(huchi1);


//++++++++++++++++++++ Chaining +++++++++++++++++++++++++++++++++++

const mohsinUser = {
    user1: {
        fullName : {
            firstName: 'Mohsin',
            lastName: 'Jutt'
        }
    }
}
// console.log(mohsinUser);
// console.log(mohsinUser.user1);
// console.log(mohsinUser.user1.fullName);
// console.log(mohsinUser.user1.fullName.lastName);


//+++++++++++++++++ Combining two Objects ++++++++++++++++++++++++++++++++++

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};

// Assign Method
const obj12 = Object.assign({}, obj1, obj2);     // '{}' is target feature. It is optional, but it is good to use it.
//console.log(obj12);

// Spread Operator Method
const obj1122 = {...obj1, ...obj2};    //this method is latest and easy
//console.log(obj1122);




//++++++++++++++++ Database Concept +++++++++++++++++++++++++++++++++++++++

const users = [
    { huchi: 'qureshi ' 
    },
    { mohsin: 'jutt'  
    },
    {   
    }
]

// console.log(users);
// console.log(users.hasOwnProperty('mohsin'));
// console.log(users[0].huchi);

//+++++++++++++++++++++++++++++++++++++++++++++

// console.log(Object.keys(users));
// console.log(Object.values(users));
// console.log(Object.entries(users));




