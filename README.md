---
Title: Sample Lesson
Duration: 15 mins
Creator: Timm Schoenborn
Topic: Defining Functions

---

# Declaring Functions
===================

### GOAL

By the end of this lesson, students should be able to declare and invoke functions.

### Recap

So far, we've learned about 
	- Data Types
	- Objects
	- Loops

Remember, to declare an object looks like this,

```
const car = {
	color: 'white',
	wheels: 4,
	transmission: 'automatic',
	smells = ['pine trees', 'leather', 'french fries']
}
```

Similarly to how we declare objects, we need to declare and invoke functions in order to write DRY(Don't Repeat Yourself) code.

## Declaring and calling functions

Functions are blocks of code that can used to perform a given task.
Defining, or declaring, functions allows us to recall these blocks of code for later use
This helps to keep our code DRY


----------
## Two Ways of Declaring Functions

There are two ways to declare a function, they look different, but they operate exactly the same. _They are __EXACTLY__ the same!_

#### __Function Expressions__

This is one way of writing functions
```
function theName(arg1, arg2, ...){
	---------------
	-block of code-
	---------------
	return
}
```
-writing _function_ makes the declaration
- _theName_ is what you will use to invoke, or _call_, the function. 
-- __This is always written in camelCase__
-- try to use a verb, or describe what your function does.
- _(arg1, arg2, ...)_ arguments are the parameters for the function
- _block of code_ statements where you set the actions of the function

```
function addNumsFunc(num1, num2){
	return (num1 + num2) 
}
```

#### __Arrow Functions__

The other way is to use an Arrow Function. Remember, arrow functions operate the _EXACT SAME WAY_ as the function we just saw. They just look different, and preference really lies with the person writing the code.(sometimes arrows are better, in certain use cases, but let's not worry about that right now.)

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
	return (num1 + num2)
}
```

## Calling Functions

### Further Examples


### Class Activity

__1.__ Declare one function that adds two numbers, halves the sum, and prints the result to the console. Invoke the function for each of these sets of numbers:

	- 5, 11
	- 4, 16
	- 8, 20

__2.__ Declare one function that will multiply two numbers, and compile the results in an array called "products". Invoke that function for these sets of numbers.

	- 3, 5
	- 2, 4
	- 10, 5
	- 4, 20

__3.__ 

----------


## Lesson Resources
-------------

- Sample Text


![Sample Text](link "link description")

![Sample Text](link "link description")

![Sample Text](link "link description")


[Sample Text](link "link description")
