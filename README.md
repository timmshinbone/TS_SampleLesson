---
Title: Sample Lesson
Duration: 15 mins
Creator: Timm Schoenborn
Topic: Defining Functions

---

# Declaring Functions
===================

### Declaring and calling functions

Functions are blocks of code that can used to perform a given task.
Defining, or declaring, functions allows us to recall these blocks of code for later use
This allows us to write DRY code


----------
## Two Ways of Declaring Functions

There are two ways to declare a function, they look different, but they operate exactly the same. _They are __EXACTLY__ the same!_

__Function Expressions__

This is one way of writing functions
```
function theName(arguments){
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
- _(arguments)_ are any variables that you need to define the parameters of the function
- _block of code_ is where you set the parameters of the function

```
function addNums(num1, num2){
	return (num1 + num2) 
}
```

__Arrow Functions__

```
const functionName = (argument) => {
	block of code
}
```

```
const isTheSameArrow = (str1, str2) => {
	if (str1 === str2) {
		return console.log("These are the same!!");
	} else {
		return console.log("These are NOT the same!!");
	}
}
```

----------


## Lesson Plan
-------------

- Sample Text


![Sample Text](link "link description")

![Sample Text](link "link description")

![Sample Text](link "link description")


[Sample Text](link "link description")
