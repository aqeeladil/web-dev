// DATE & TIME


let myDate = new Date();

console.log(typeof myDate);
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());


// ++++++++++++++++++++++++++++++++

let myCreatedDate = new Date(2023, 0, 20, 5, 3, 2);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());


let yymmdd = new Date('2023-01-20');
console.log(yymmdd.toLocaleString());


// ++++++++++++++++++++++++++++++++++

let myTimeStamp = Date.now();
console.log(myTimeStamp);     // here we get value in milli-seconds

console.log(myCreatedDate.getTime());

console.log(Math.round (Date.now()/1000) );    // to get the value in seconds


// ++++++++++++++++++++++++++++++++

console.log(myCreatedDate.toLocaleString('default', {
    weekday: 'long',
    hourCycle: 'h12'

}));