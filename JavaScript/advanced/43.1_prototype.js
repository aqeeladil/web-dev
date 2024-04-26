// prototype

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){                             // here we have created a new object property named hitesh
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){                           // // here we have created a new array property named hayHitesh
    console.log(`Hitesh says hello`);
}


// an array can access object property, but object cannot access array property

// heroPower.hitesh()                              
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport                    //__proto__ is prototypal inheritance , which means we are linking two objects , and now one can access the properties of other.
}

Teacher.__proto__ = User                        



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)             // teachingSupport can access the properties of Teacher

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()