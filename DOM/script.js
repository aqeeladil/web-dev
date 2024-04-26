// DOM TUTORIAL

//++++++++++++++++++++++++ SELECTING HTML ELEMENT +++++++++++++++++++++++++++++++++++
/*
let a = document.querySelector('h1');
console.log(a);
*/

//+++++++++++++++++++++++++ CHANGING THE HTML ++++++++++++++++++++++++++++++++++++++

// a.innerHTML = 'WE CHANGED IT';


//++++++++++++++++++++++++++++ CHANGING CSS +++++++++++++++++++++++++++++++++++++
/*
a.style.color = 'red';
a.style.backgroundColor = 'blue';
*/


//++++++++++++++++++++++++++++ LISTENING TO AN EVENT ++++++++++++++++++++++++++++++
/*
a.addEventListener('click', function(){
    console.log('Hey Friends, Chai pee lo, GARAM HAI');
})
*/


//+++++++++++++++++++ SELECTING MULTIPLE ELEMENTS AT THE SAME TIME +++++++++++++++++++++
/*
let h = document.querySelectorAll('h1')

h.forEach(function(d){
    console.log(d)
})
*/


//++++++++++++++++++++++++++++++++++ BULB EXAMPLE ++++++++++++++++++++++++++++++
/*
let bulb = document.querySelector('#bulb');
let button = document.querySelector('#btn');

let flag = 0

button.addEventListener('click', function(){
    if(flag==0){
        bulb.style.backgroundColor = 'yellow'
        flag = 1
    }
    else{
        bulb.style.backgroundColor = 'silver'
        flag = 0
    }
})
*/



