// EVENTS

//+++++++++++++++++++++++++++ unoptimized way of using events +++++++++++++

// avoid using event inside html, bcz it is not an optimized way
// for example, here an onclick event is injected inside an html element for alert purpose
// onclick = "alert('own clicked)";


// ++++++++++++++++++++++++ another unoptimized method of using events ++++++++++++++++++++

// document.getElementById('owl').onclick = function(){
//     alert("another owl clicked")
// };

// +++++++++++++++++++++++ some other event listeners that were popular in the past ++++++++++++++
// attachEvent()
// jQuery - on


// ++++++++++++++++++++++ instead of above methods, use Eventlisteners method++++++++++++++++++

// document.getElementById('owl').addEventListener('click', function () {
//     console.log("owl clicked again");
// }, false)                               // here false is the default parameter


// +++++++++++++++++++++ event object +++++++++++++++
// document.getElementById('owl').addEventListener('click', function (e) {       // e is the event object
//     console.log(e);
// }, false)                 

// here are some popular events to practice:
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode


// ++++++++++++++++++++++ Event bubbling (false) (bottom to top) +++++++++++++++++++++++++++++
// owl is the inner element, so it will print first if clicked, and then the outer element images will be printed
// if owl is clicked, and we dont want to print the outer images element, then use stopPropagation property as shown in the example

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul");
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked");
//     //e.stopPropagation()
// }, false)


// ++++++++++++++++++++++ Event capturing (true) (top to bottom) +++++++++++++++++++++++++++++
// first the outer element images will be printed, and then inner owl element will print

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul");
// }, true)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked");
// }, true)

// +++++++++++++++++++++++++++ preventDefault ++++++++++++++++++++++++++++++++++++++++++++


// document.getElementById('google').addEventListener('click', function (e) {
//     e.preventDefault();
//     //e.stopPropagation()
//     console.log("google clicked");
// }, false)


// ++++++++++++++++++++++++ remove the image when clicked on it ++++++++++++++++++++++++++++++++++++++++++++++++++++


document.querySelector('#images').addEventListener('click', function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

}, false)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//removeIt.parentNode.removeChild(removeIt)
