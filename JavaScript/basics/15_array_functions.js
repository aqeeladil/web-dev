// ARRAY FUNCTIONS

// +++++++++++++++ Push_Method ++++++++++++++++++

const front_End = ['reactJS', 'nextJS', 'css', 'html'];
const back_End = ['nodeJS', 'java', 'django'];

// front_End.push(back_End);
// console.log(front_End);
// console.log(front_End[4]);
// console.log(front_End[4][1]);


// +++++++++++++++++ Concat_Method ++++++++++++++++

let full_stack = front_End.concat(back_End);
//console.log(full_stack);


// +++++++++++++++++ Spread_Operator +++++++++++++++
//it copies reference values (...)

// let a = [1,2,3,4,5];
// let b = [...a];
// b.pop();
// a.shift();
// console.log(a);
// console.log(b);


// let another_fullStack = [...front_End, ...back_End];
// console.log(another_fullStack);


// ++++++++++++++++++ Flat_Method ++++++++++++++++++

// const my_num = [1, 2, 3, 4, [5,6], 7, [8, [9, 10], 11], 12];
// const my_real_num = my_num.flat(Infinity);
// console.log(my_real_num);


// +++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Array.isArray('Hitesh'));
// console.log(Array.from('Hitesh'));
// console.log(Array.from({age: 23}));

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3));
