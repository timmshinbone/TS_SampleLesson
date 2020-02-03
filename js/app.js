// DEFINING FUNCTIONS

// Defining functions, calling functions

// function functionName(arguments) {
// 	BLOCK OF CODE
// 	return
// }

function isTheSame(str1, str2){
	if (str1 === str2) {
		return console.log("They're the Same!");
	} else {
		return console.log("They are not the same");
	}
}

console.log("'timm', 'taylor'");
isTheSame("timm", "taylor")
console.log("'mark', 'mark'");
isTheSame("mark", "mark")

// const functionName = (arguments) => {
// 	BLOCK OF CODE
// 	return
// }

const isTheSameArrow = (str1, str2) => {
	if (str1 === str2) {
		return console.log("These are the same!!");
	} else {
		return console.log("These are NOT the same!!");
	}
}

console.log("'Mark', 'Mark'");
isTheSameArrow("Mark", "Mark")
console.log("'Timm', 'Timm'");
isTheSameArrow("Timm", "Timm")
console.log("'Taylor', 'Timm'");
isTheSameArrow("Taylor", "Timm")
console.log("'four', 'FOUR'");
isTheSameArrow("four", "FOUR")
console.log("'four', '4'");
isTheSameArrow("four", 4)


