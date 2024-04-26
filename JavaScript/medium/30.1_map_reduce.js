//+++++++++++++++++++ map +++++++++++++++++++++++++++++

const nums = [1,2,3,4,5,6,7];
let newNum = nums.map( i => i + 10);
console.log(newNum);

// +++++++++++++++++++ chaining method ++++++++++++++

const nums2 = [1,2,3,4,5,6,7];
let newNum2 = nums2.map( i => i * 10).map( i => i + 1).filter( i => i >= 40);
//console.log(newNum2);


// ++++++++++++++++++++++++++ Filter ++++++++++++++++++++++++++

let hehe = [1,2,3];
let myTotal = hehe.reduce( (acc, currVal) => {
    console.log(`The acc is : ${acc} & currVal is : ${currVal}`);
    return acc + currVal;

}, 0 )

//console.log(myTotal)

// +++++++++++++++++++++++++++++++++++++++++++++++

const shoppingCart = [
    {
        itemName : 'js course',
        price : 299
    },
    {
        itemName : 'python course',
        price : 399
    },
    {
        itemName : 'mobile dev course',
        price : 499
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => {
    return acc + item.price;
}, 0)

console.log(priceToPay);