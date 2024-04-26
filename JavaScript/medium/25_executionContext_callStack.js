// How does JS execute Code + Call Stack
// refer the video tutorial for better understanding
// refer this blogger post for notes : https://aqeeladil.blogspot.com/2023/09/execution-context.html

/*
execution context & lexical environment
whenever we run a function, function will build its own imaginary container(execution context) which includes 3 components.
1) variables
2) function inside that parent fnc
3) lexical environment of that fnc (which things we can access and which we cannot) (forexample a parent function A cannot access the value of its child function B, means the variable in a child function does not comes under the scope of parent fnc)
*/


// +++++++++++++++++++++++++++ EXECUTION CONTEXT ++++++++++++++++++++++++++++

// Javascript Execution Context : How jS execute code 
// js is single threaded. 
// js run our code in two phases. 
// 1_memory creation phase
// 2_execution phase (// 1_global execution context, 2_functional execution context, 3_eval execution context)


// +++++++++++++++++++++++++++++ CALL STACK +++++++++++++++++++++++++++++++++++++++

//
// LIFO (last in, first out)
