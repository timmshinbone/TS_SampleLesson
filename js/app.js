// DECLARING FUNCTIONS

// Defining functions, calling functions

// function functionName(arguments) {
// 	BLOCK OF CODE
// 	return
// }

const names = ['timm', 'taylor', 'mark', 'alaina', 'rebecca', 'monica', 'timm']

function isTheSame(str1, str2){
	console.log("checking to see if ", str1, " and ", str2, " are the same.");
	if (str1 === str2) {
		return console.log("They're the Same!");
	} else {
		return console.log("They are not the same");
	}
}


isTheSame(names[0], names[1])

isTheSame(names[2], names[2])

// const functionName = (arguments) => {
// 	BLOCK OF CODE
// 	return
// }

const isTheSameArrow = (str1, str2) => {
	console.log("checking to see if ", str1, " and ", str2, " are the same.");
	if (str1 === str2) {
		return console.log("These are the same!!");
	} else {
		return console.log("These are NOT the same!!");
	}
}


isTheSameArrow(names[2], names[2])

isTheSameArrow(names[0], names[5])

isTheSameArrow(names[1], names[0])

isTheSameArrow(names[4], names[3])

isTheSameArrow('four', 4)

isTheSameArrow('four', 'four')


