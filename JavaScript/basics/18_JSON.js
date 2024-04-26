// Object de-structure & JSON API

//++++++++++++++++++++ Object de-structure +++++++++++++++++++

const course = {
    coursename : 'js in hindi',
    price : '999',
    instructor : 'hitesh',

}

const {instructor : ustad} = course         // you can just use 'instructor'. 'ustad' is optional.
//console.log(ustad)

const {price} = course
//console.log(price);


//++++++++++++++++++++++ JSON ++++++++++++++++++++++++++++

// {
//     'myname': 'aqeel',
//     'email': 'huchi@gmail.com',
//     'price': '999',
// }

// another example 
// [
//     {},
//     {},
//     {},
// ]        
    