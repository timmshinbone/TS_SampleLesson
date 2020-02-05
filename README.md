---
Title: Sample Lesson
Duration: 15 mins
Creator: Timm Schoenborn
Topic: Declaring and Calling Functions

---
----------
# Declaring And Calling Functions
----------

## GOAL

By the end of this lesson, students should be able to declare and invoke functions.

----------
### Recap

So far, we've learned about:
- Data Types
- Objects
- Loops

Remember, to declare an object looks like this:

```
const car = {
	color: 'white',
	wheels: 4,
	transmission: 'automatic',
	smells: ['pine trees', 'leather', 'french fries']
}
```
To access the properties, or key-value pairs, of an object, we have to _call_, or _invoke_, those properties. Below, we are logging the values to the console:

```
console.log(car);
console.log(car.transmission);
console.log(car.smells[2]);
```


Similarly to how we use objects, we need to declare and invoke functions in order to write __DRY__(_Don't Repeat Yourself_) code.

## Declaring Functions

Functions are blocks of code that can be used to perform a given task, and used repeatedly for that, as well as, other tasks.

__Declaring__ functions allows us to recall these blocks of code for later use.
This helps to keep our code __*DRY*__


----------
## Two Ways of Declaring Functions

There are two ways to declare a function, they look different, but they operate exactly the same. 
##### _Let me repeat, they are __EXACTLY__ the same!_

#### Function Expressions

This is one way of writing functions
```
function theName(arg1, arg2, ...){
	---------------
	-block of code-
	---------------
	return
}
```
- writing _function_ makes the declaration
- _theName_ is what you will use to invoke, or _call_, the function. 
	- __This is always written in camelCase__
	- try to use a verb, or describe what your function does.
- _(arg1, arg2, ...)_ arguments are the parameters for the function
- _block of code_ These are the statements where you set the actions of the function
- _return_ -Functions always automatically result as _undefined_, this is where you tell the function what information you're looking to get out of it. Every function, no matter the complexity, should only return one result.

Let's take a look at a basic addition function:

```
function addNumsFunc(num1, num2){
	let sum = num1 + num2
	return sum 
};
```
Pretty straightforward, right?

#### Arrow Functions

The other method is to use an Arrow Function. Remember, arrow functions operate the *__EXACT__ SAME WAY* as the function we just saw. They just look different, and preference really lies with the person writing the code.(sometimes arrows are better, in certain use cases, but let's not worry about that right now.)

```
const theName = (arg1, arg2, ...) => {
	---------------
	-block of code-
	---------------
	return
}
```

```
const addNums = (num1, num2) => {
	let sum = num1 + num2
	return sum
};
```

## Calling Functions

__GOOD NEWS!__

Calling, or _invoking_, functions is the easy part!!

All we do to call a function, is type the name of the function with a set of parentheses next to it, your arguments are to be placed in the parentheses. 

For example, if I wanted to use our addNums function to find out what 1 + 2 is, I'd *__call__* the function like this:

```
addNums(1, 2);
```

You can also call functions _inside_ of other functions. For instance, if I wanted to log the result of my previous function call to the console, I'd do so as follows:

```
console.log(addNums(1, 2));
```


----------
### Class Activity

__1.__ Declare one function called _addAndHalve_ that takes two numbers as arguments, adds those two numbers, halves the sum, and returns the result. Invoke the function using each of these sets of numbers:

	- 5, 11
	- 4, 16
	- 8, 20

__2.__ Declare one function called _multiply_ that will multiply two numbers, and _push_ the results to an array called _products_. Invoke that function for these sets of numbers. Log the resulting array to the console.

	- 3, 5
	- 2, 4
	- 10, 5
	- 4, 20

__3.__ Declare one function called _divider_ that takes two arguments, and divides the first by the second. Use the first item from the newly minted _products_ array for the first argument, and divide it by the first number of the first set from the last problem(#2). Do this for each of the items in _products_ with their corresponding first number from problem #2. (the result should be the second number from each set!)

----------


## Further Reading and Resources
-------------

[Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function "MDN - Function Expressions")

[Function Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function "MDN - Function Declaration")

[Function Return Values](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values "MDN - Function Return Values")

[Pushing to an Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push "MDN - array.push")


