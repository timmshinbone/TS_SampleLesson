// DEFINING FUNCTIONS

// Defining functions, calling functions

function isTheSame(str1, str2){
	if (str1 === str2) {
		return console.log("They're the Same!");
	} else {
		return console.log("They are not the same");
	}
}

isTheSame("timm", "taylor")
isTheSame("mark", "mark")

const isTheSame2 = (str1, str2) => {
	if (str1 === str2) {
		return console.log("These are the same!!");
	} else {
		return console.log("These are NOT the same!!");
	}
}

isTheSame2("Mark", "Mark")
isTheSame2("Timm", "Timm")
isTheSame2("Taylor", "Timm")