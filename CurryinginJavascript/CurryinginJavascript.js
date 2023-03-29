/*
Currying in JavaScript

Currying is a functional programming technique.

This article will discuss currying, a functional programming technique we can use to write code that is modular, easy to test, and highly reusable. Functional programming is a declarative paradigm that emphasizes immutability and pure functions — meaning the function is side-effect free and for any given input it will always return the same output.

This helps make code more readable and easier to reason about in general, and currying is just one part of it. Let’s get started with currying!
How currying works

In order to understand the point of currying and how it works, we can first look at a non-curried function.

Below, we’ve created a non-curried function add(). add() will still execute if called with a missing argument, which would result in the missing variable being evaluated as undefined. For the add() function below, if add() was called with an argument for a but not for b, the function call would evaluate as 1 + undefined and return NaN. That’s not great and could be tricky to debug in practice.
*/

function add(a,b) {
    return a + b;
}

/*
Why does this happen? If add() is missing an argument when it’s called, it will evaluate the function call as add(a, undefined). For example, if we use 1 as an argument for the variable a and no argument for b, calling add(1) would run as add(1, undefined).
Function call: 	→ 	Evaluated as:
add(1) 	→ 	add(1, undefined)

Let’s curry the add() function to see how we can handle the function call better if only one argument is available. What we can do is transform the add() function, which normally expects multiple arguments, into a series of nested functions that will each take a single argument.

This makes the function calls more modular. With curried functions, calling the outer function returns the next function in the chain and so on until the innermost function is called, which then returns a value.

In code that would look like this:
*/

// traditional function
function add(a,b) {
    return a + b;
}

// curried function
function curried_add(a) {
    // The outer function returns a nested single-argument function
    return function nested_func(b) {
        return a + b;
   }
}

/*
What we did in the code is declare curried_add() as a function that takes a single argument and returns another function named nested_func(). (The returned function can also be anonymous, but has a name in this example for clarity.)

    Calling the outer function curried_add() returns nested_func().
    Calling nested_func uses the arguments supplied from calling curried_add and nested_func to return the evaluated result of a + b.

When you call curried_add(a), the returned output is the function nested_func(b). Then you can call nested_func(b) and the output will be the evaluated result of a + b.
Function call: 	→ 	Returns:
curried_add(1) 	→ 	nested_func(b)
nested_func(b) 	→ 	a + b

You can call that in your code as curried_add(a)(b), which invokes curried_add(), then invokes nested_func() immediately following the first function call.

Let’s break that down further. In the code block below, we are assigning the result of calling curried_add() to a variable named add_one.


let add_one = curried_add(1);
// returns nested_func()

/*
Now, when we call add_one(), it will return the value of a + b, because it is the function nested_func().
*/

add_one(10);
// returns 11

/*
The argument from calling curried_add() is available to the nested functions due to closure. A closure means that the nested function retains the scope of parent functions based on where the function is defined, even if the nested function is executed outside of that lexical scope.

You may recall that a function can access variables both in its inner and outer scope. That behavior is an example of lexical scoping rules, which means the scoping is based on the structure of the code.

Taking that one step further, when a function is invoked, lexical scoping is retained. So nested functions will continue to have access to any variables that are declared in the outer scope of parent functions. This is true even if that parent function is done executing.

Overall, that means that when you run the line let add_one = curried_add(1); , add_one() will retain the scope from curried_add() and therefore have access to the variable created for the argument a as 1, which you can see explained in the code snippet line by line:
*/

function curried_add(a) {
    // has access to the argument for a
    return function nested_add(b) {
        // has access to the arguments for a and b
        return a + b;
    }
}

// creates a local variable a and assigns it the value 1
let add_one = curried_add(1);

// add_one() still has access to the argument from curried_add()
add_one(10);
