// STRING METHODS

let myname = 'huchiboy';
let age = 25;
console.log(`Hello my name is ${myname} & age is ${age}`);


// +++++++++++++++++++++++++++++++++++++++++


// use this example on the browser console to understand it better
let gameName = new String ('aqeel adil');
console.log(gameName);
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('q'));
console.log(gameName.length);


// ++++++++++++++++++++++++++++++++++++++++++

let newStr = gameName.substring(0, 5);
console.log(newStr);

// +++++++++++++++++++++++++++++++++++++++++

let anotherStr = gameName.slice(6, 10);                 //learn about splice as well
let anotherStrReverse = gameName.slice(-4, -1)
console.log(anotherStr);
console.log(anotherStrReverse);

// +++++++++++++++++++++++++++++++++++++++++++

let metoo = "  me too   "
console.log(metoo.trim())

// +++++++++++++++++++++++++++++++++++++++++=

let url = 'aqeelhuchi.com'
console.log(url.replace('huchi', 'adil17'))
console.log(url)

// ++++++++++++++++++++++++++++++++++++++++=

let baby = "newly born baby"
console.log(baby.split(' '))


// +++++++++++++++++++++++++++++++++++++++++

console.log(baby.includes('born'));