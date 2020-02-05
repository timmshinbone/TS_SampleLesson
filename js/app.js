
//RECAP - OBJECTS

// Objects

//declaring objects
const car = {
	color: 'white',
	wheels: 4,
	transmission: 'automatic',
	smells: ['pine trees', 'leather', 'french fries']
}

//calling objects

console.log(car);
console.log(car.transmission);
console.log(car.smells[2]);

// DECLARING FUNCTIONS

// Defining functions, calling functions


// function addNumsFunc(num1, num2){
// 	let sum = num1 + num2;
// 	return sum 
// }

// console.log("this is addNumsFunc \n\n");
// console.log(addNumsFunc(2, 3));

// const addNums = (num1, num2) => {
// 	let sum = num1 + num2;
// 	return sum
// }

// console.log("this is addNums \n\n");
// console.log(addNums(7, 3));

// const three = addNums(1, 2);
// console.log(three);


//////////////////////////////////////////////////////////////////
//OTHER EXAMPLES WITH DIFFERENT DATA TYPES

// const names = ['timm', 'taylor', 'mark', 'alaina', 'rebecca', 'monica', 'timm']

// function isTheSame(str1, str2){
// 	console.log("checking to see if ", str1, " and ", str2, " are the same.");
// 	if (str1 === str2) {
// 		return console.log("They're the Same!");
// 	} else {
// 		return console.log("They are not the same");
// 	}
// }


// isTheSame(names[0], names[1])

// isTheSame(names[2], names[2])

// // const functionName = (arguments) => {
// // 	BLOCK OF CODE
// // 	return
// // }

// const isTheSameArrow = (str1, str2) => {
// 	console.log("checking to see if ", str1, " and ", str2, " are the same.");
// 	if (str1 === str2) {
// 		return console.log("These are the same!!");
// 	} else {
// 		return console.log("These are NOT the same!!");
// 	}
// }


// isTheSameArrow(names[2], names[2])

// isTheSameArrow(names[0], names[5])

// isTheSameArrow(names[1], names[0])

// isTheSameArrow(names[4], names[3])

// isTheSameArrow('four', 4)

// isTheSameArrow('four', 'four')

////////////////////////////////////////////////////////////////////////////////////////////

//1. ANSWER KEY
console.log("PROBLEM 1");


const addAndHalve = (num1, num2) => {
	let sum = num1 + num2;
	return sum / 2
};

console.log("this is addAndHalve(5, 11)");
console.log(addAndHalve(5, 11));

console.log("this is addAndHalve(4, 16)");
console.log(addAndHalve(4, 16));

console.log("this is addAndHalve(8, 20)");
console.log(addAndHalve(8, 20));

//2. ANSWER KEY
console.log("PROBLEM 2");

const undoHalve = (num1, num2) => {
	let funcOneValue = addAndHalve(num1, num2)
	return (funcOneValue * 2)
}

console.log("this is undoHalve(5, 11)");
console.log(undoHalve(5, 11));
console.log("this is undoHalve(4, 16)");
console.log(undoHalve(4, 16));
console.log("this is undoHalve(8, 20)");
console.log(undoHalve(8, 20));

//3. ANSWER KEY
console.log("PROBLEM 3");

let products = []

const multiply = (num1, num2) => {
	let product = num1 * num2
	return products.push(product)
}

console.log("This should be empty products array, \n", products);

multiply(3, 5);
multiply(2, 8);
multiply(10, 5);
multiply(4, 20);

console.log("This is the completed products array, \n", products);

//4. ANSWER KEY
console.log("PROBLEM 4");


const divide = (num1, num2) => {
	return num1 / num2
}

console.log(divide(products[0], 3));
console.log(divide(products[1], 2));
console.log(divide(products[2], 10));
console.log(divide(products[3], 4));


