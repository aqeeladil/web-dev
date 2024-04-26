// Edit or remove an element

//+++++++++++++++++++ creating elements using a function ++++++++++++++

function addLang (langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li);

}
addLang('Python');
addLang('ROR');

//++++++++++++++++++ optimized way of creating elements using functions +++++++

function addOptiLang (langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);

}
addLang('Swift');
addLang('Golang');


//+++++++++++++++++++++++ edit a value in element ++++++++++++++++++++

const secondLand = document.querySelector('li:nth-child(2)');
console.log(secondLand);

// secondLand.innerHTML = 'Mojo';                // innerHTML way of editing an element is not recommended bcz it is not optimized. Instead, create a new element and then add value 'Mojo' using textContent

//optimized way
const newli = document.createElement('li');     
newli.textContent = 'Mojo';
secondLand.replaceWith(newli);


// +++++++++++++++++++ another way of editing a value ++++++++++++++++

const firstLang = document.querySelector('li:first-child');
firstLang.outerHTML = `<li>Java</li>`;


// +++++++++++++++++++ removing a value ++++++++++++++++++++++

const lastLang = document.querySelector('li:last-child');
lastLang.remove();

