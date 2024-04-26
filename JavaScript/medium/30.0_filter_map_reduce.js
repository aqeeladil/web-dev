// FILTER, MAP, REDUCE


// ++++++++++++++++++++ for each does not return a value ++++++++++++++
// here it will print the value, but does not return the value

const code = ['js', 'python', 'java']

// code.forEach( i => {
//     console.log(i);           
//     return i
// })


// ++++++++++++++++++++++++++ Filter +++++++++++++++++++++++++++++++++++++++++

const myNum = [0,1,2,3,4,5,6,7,8];
const kaka = myNum.filter( i => i > 4)
//console.log(kaka);

// +++++++++++++++++++++++++++++

const myNum2 = [0,1,2,3,4,5,6,7,8];
const kaka2 = myNum2.filter( i => {
    return i > 4;
});
//console.log(kaka2);


// ++++++++++++++++++++++ inefficiet way using foreach +++++++++++++++++++++++

const thisNum = [0,1,2,3,4,5,6,7,8];

const kaka3 = [];
thisNum.forEach( (i) => {
    if (i > 4) {
        kaka3.push(i)
    }
})

//console.log(kaka3)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History" 
})

//console.log(userBooks);

