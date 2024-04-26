
// Parent Child Relation


// +++++++++++++++++++++++++++++++++++++++++++++++++++++

const baap = document.querySelector('.parent');
// console.log(baap);                             //result wil be a parent class
// console.log(baap.children);                    //result will be an html collection
// console.log(baap.children[1].innerHTML);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for (let i=0; i < baap.children.length; i++){
//     console.log(baap.children[i].innerHTML);
// }

//+++++++++++++++++++++ parent to child access +++++++++++++++++++++++++++++++++++==

baap.children[1].style.color = "orange";
// console.log(baap.firstChild);
// console.log(baap.lastChild);
// console.log(baap.firstElementChild);
// console.log(baap.firstElementChild.innerHTML);
// console.log(baap.lastElementChild);
// console.log(baap.lastElementChild.innerHTML);
// console.log(baap.childNodes);               //its a complex tree of elements, texts and blank spaces


//+++++++++++++++++++++++ child to parent access+++++++++++++++++++++++++++++++++

const dayOne = document.querySelector('.day');
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);
console.log(dayOne.nextSibling);





