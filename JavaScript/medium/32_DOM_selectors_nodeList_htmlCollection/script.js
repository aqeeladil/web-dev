// DOM Selectors, NodeList, HtmlCollection

// NodeList & HTMLCollection are not pure Arrays

// use this code for a wikipedia page for better understanding

document.getElementById('title');
document.getElementById('title').id;
document.getElementById('title').className;
document.getElementById('title').getAttribute('id');
document.getElementById('title').setAttribute('class', 'test');   // this feature over rides the previous value
document.getElementById('title').setAttribute('class', 'test test2');   // here we have two classes , test & test2


const my_title = document.getElementById('title').setAttribute('class', 'test test2');
console.log(my_title);
my_title.style.backgroundColor = 'green';


// +++++++++++++++++++++these give same value but are different+++++++++++++++++++++++++++++++++++++

my_title.innerHTML;         // it shows text along with tags  
my_title.innerText;          // it gives plain text
my_title.textContent;        // it gives text along with hidden values set to display:none


// ++++++++++++++++++++++++++++++++ DOM Selectors ++++++++++++++++++++++++++++

document.getElementsByClassName('heading')
document.querySelector('h1');  // it gives the first h1 element  // it gives HTMLCollection
document.querySelectorAll('h1');  // it gives all h1    // it gives NodeList

document.querySelector('#title');          //it gives the first title id
document.querySelector('.heading');       //it gives the first heading class
document.querySelector("input[type:'password']");       //it gives the first input element with type:password
document.querySelector('p:first-child');

document.querySelector('ul').querySelector('li').style.backgroundColor = 'yellow';




// ++++++++++++++++++++++++++ array to nodeList +++++++

const tempList = document.querySelectorAll('li');
console.log(tempList);
tempList[0].style.backgroundColor = 'green'  


// +++++++++++++++++++++++++ HTMLCollection to array ++++++++++++++++++++++

const tempClass = document.getElementsByClassName('items');
const myConvertedArray = Array.from(tempClass);
console.log(myConvertedArray);

