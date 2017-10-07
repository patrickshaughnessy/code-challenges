/*
Solution

The user's prize is always undefined!





The Problem

The anonymous function we're assigning to the buttons' onclicks has access to
variables in the scope outside of it (this is called a closure). In this case,
it has access to btnNum.

When a function accesses a variable outside its scope,
it accesses that variable, not a frozen copy.

So when the value held by the variable changes, the function gets that new value.

By the time the user starts pressing buttons, our loop will have already
completed and btnNum will be 3, so this is what each of our anonymous
functions will get for btnNum!

Why 3? The for loop will increment btnNum until the conditional in the middle
is no longer met—that is, until it's not true that btnNum < prizes.length.
So the code in the for loop won't run with btnNum = 3, but btnNum will be 3
when the loop is done.

Why undefined? prizes has 3 elements, but they are at indices 0,1,2.
Array indices start at 0, remember?

(Write this down—forgetting this is an easy way to create an off-by-one error in a whiteboard interview.)

In JavaScript, accessing a nonexistant index in an array returns undefined
(Python throws an IndexError, but Ruby returns nil).




The Solution

We can solve this by wrapping our anonymous function in another anonymous function
that takes btnNum as an argument. Like so:

(prizes2.html)

This "freezes" the value of btnNum. Why? Well...



Primitives vs. Objects

btnNum is a number, which is a primitive type in JavaScript.

Primitives are "simple" data types (string, number, boolean, null, and undefined in JavaScript).
Everything else is an object in JavaScript (functions, arrays, Date() values, etc).






Arguments Passed by Value vs. Arguments Passed by Reference

One important property of primitives in JS is that when they are passed as
arguments to a function, they are copied ("passed by value"). So for example:

Heads up: This is not well-formed JavaScript. We're using it to prove a point.

*/

var threatLevel = 1;

function inspireFear(threatLevel){
    threatLevel += 100;
}

inspireFear(threatLevel);
console.log(threatLevel); // Whoops! It's still 1!

// The threatLevel inside inspireFear() is a new number, initialized to the same
// value as the threatLevel outside of inspireFear().

// Giving these different variables the same name might cause confusion here.
// If we change the two variables to have different names we get the exact same behavior:

var threatLevel = 1;

function inspireFear(theThreatLevel){
    theThreatLevel += 100;
}

inspireFear(threatLevel);
console.log(threatLevel); // Whoops! It's still 1!


// In contrast, when a function takes an object, it actually takes a reference to
// that very object. So changes you make to the object in the function persist after
// the function is done running. This is sometimes called a side effect.

var scaryThings = ['spiders', 'Cruella de Vil'];

function inspireFear(scaryThings){
    scaryThings.push('lions');
    scaryThings.push('tigers');
    scaryThings.push('bears');
}

inspireFear(scaryThings);
console.log(scaryThings);
// ['spiders', 'Cruella de Vil', 'lions', 'tigers', 'bears'] oh my!

/*

Bringing it home

So when we pass btnNum to the outer anonymous function as its one argument,
we create a new number inside the outer anonymous function called frozenBtnNum
that has the value that btnNum had at that moment (0, 1, or 2).

Our inner anonymous function is still a closure because it still reaches
outside its scope, but now it closes over this new number called frozenBtnNum,
whose value will not change as we iterate through our for loop.
