function add(a, b) {
	if (typeof a !== "string" || typeof b !== "string" || a === "" || b === "" || isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
		throw "Invalid Input"
	}

	aInt = parseFloat(a);
	bInt = parseFloat(b);

	return aInt + bInt;
}

function subtract(a, b) {
	if (typeof a !== "string" || typeof b !== "string" || a === "" || b === "" || isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
		throw "Invalid Input"
	}

	aInt = parseFloat(a);
	bInt = parseFloat(b);

	return aInt - bInt;
}

function tax(subtotal, percentTax) {
	
	if (typeof subtotal !== "string" || typeof percentTax !== "string" || subtotal === "" || percentTax === "") {
		throw "Invalid Input";
	}

	var subText = subtotal.replace("$","");
	var taxText = percentTax.replace("%","");

	if (isNaN(parseFloat(subText)) || isNaN(parseFloat(taxText))) {
		throw "Invalid Input";
	}

	var subInt = parseFloat(subText);
	var taxInt = parseFloat(percentTax);

	var totalTax = (subInt * (taxInt/100));

	return totalTax.toFixed(2);
}
function stringLength(string) {
	
	if (typeof string !== "string" || string === "") {
		throw "Invalid Input"
	}

	if (string.length < 5) {
		return "short string";
	}
	else if (string.length >= 5 && string.length < 10) {
		return "medium string";
	}
	else {
		return "long string";
	}
}

function startsWith(string) {

	if (typeof string !== "string" || string === "") {
		throw "Invalid Input"
	}

	var lowerCase = string.toLowerCase();

	if (lowerCase.charAt(0) === "a") {
		return "starts with A";
	}
	else if (lowerCase.charAt(0) === "b") {
		return "starts with B";
	}
	else if (lowerCase.charAt(0) === "c") {
		return "starts with C";
	}
	else if (lowerCase.charAt(0) === "d") {
		return "starts with D";
	}
	else if (lowerCase.charAt(0) === "e") {
		return "starts with E";
	}
	else {
		return "starts with something else";
	}
 }

function stringRepeat(string, n) {
	
	if (typeof string !== "string" || string === "" ||typeof n !== "string" || n === "" || isNaN(parseFloat(n))) {
		throw "Invalid Input";
	}

	var repeated = [];
	var nInt = parseFloat(n);

	for (var i =0; i < nInt; i++) {
		repeated.push(string);
	}
	return repeated.toString();
}

function nSum(n) {

	if (typeof n !== "string" || n === "" || isNaN(parseFloat(n))) {
		throw "Invalid Input"
	}
	var nInt = parseFloat(n);

	return ((nInt*(nInt+1))/2);
}

function join(array, selector) {

	return array.join(selector);
}

function countLetters(string) {

	// var splitString = string.replace(" ","")
 //    var letterCount = {},
 //        length = splitString.length;
 //    splitString = splitString.split('').reverse();

 //    while (length--) {
 //    letterCount[splitString[length]] = letterCount[splitString[length]] + 1 || 1;
 //    return letterCount;
	// }



//Use object because want to group together all a's and b's, etc.
//will need a counter for each letter in input string
//bunch of similar variables and doing a bunch of similar things to them usually use an object.
//Use object over array when info is named, not numbered (i.e. indexes).

//First, this is how to check for just a certain letter or character.
//would need numX for every letter in alphabet and for loop for each.
// var numAs = 0;

// for (var i = 0; i < string.length; i++) {
// 	if (string.charAt(i) === "a") {
// 		numAs = numAs + 1;
// 	}
// 	return numAs
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Should do with objects for less code

//Want to make object that goes over each letter and adds a letter to object if it encounters it and gives it inital value of 1.
//If that letter is encountered again add 1 to that characters initial value.
var letterCount = {};
//iterate over each letter of the string
for (var i = 0; i < string.length; i++) {
//storing the charat(i) in a currentLetter variable
	var currentLetter = string.charAt(i);
	

//If object has property of current letter already run as false and do else.  Otherwise set equal to 1 if hasn't been encountered yet.
//Saying does this object exit already?  If so increment it's value by one.  Otherwise set equal to one.
	if (!letterCount.hasOwnProperty(currentLetter)) {
//"if letterCount doesn't have  aproperty called "C" then make one and set equal to 1
		letterCount[currentLetter] = 1;
	}
	else {
		letterCount[currentLetter]++;
	}

}
//need to convert this object to  a string now.
//declare an empty string
var outputString = "";
//use for in loop to iterate over object (have to use for in because object isn't ordered.  It basically says go visit every property in my object
// 1 by 1 until none left).

for (var propertyName in letterCount) {
	//property name is c, lettercount is 1 (for cat)
	var value = letterCount[propertyName];
	console.log(propertyName, letterCount[propertyName]);
	outputString = outputString + propertyName + ":" + value;
}




console.log(letterCount);
return outputString;


}

function maze() {

	var matrix = [

[true,"start",false,false,true,true,],
[true, true,  true,false,true,true,],
[true, false,false,false,true,true,],
[true, false,true,true,true,true,],
[false,false,true,true,true,true,],
["end",true,true,true,true,true,]

	];

	return matrix;
}

function table(myObjects, year, make, model, color) {

	var obj =[];
	var filterArray = [];

	if (year !== "") {
		filterArray.push(year);
	}
	if (make !== "") {
		filterArray.push(make);
	}
	if (model !== "") {
		filterArray.push(model);
	}
	if (color !== "") {
		filterArray.push(color);
	}

	console.log(filterArray);


	for (var i = 0; i < myObjects.length; i++) {
		var counter = 0;
		for (var props in myObjects[i]) {
			for (var j= 0; j < filterArray.length; j++) {
				if(myObjects[i][props] == filterArray[j]) {
					counter++;
				}
				console.log(counter);
			} 

			if (counter === filterArray.length) {
			obj.push(myObjects[i][props]);
		}
			// if (counter === filterArray.length) {
			// obj.push(myObjects[i][props]);
		}
	}
	console.log(obj);
	return obj
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//More objects practice


// var lookup = "author";
// var book = {
// 	isbn: "9834n394",
// 	title: "Game of Thrones",
// 	author: "George RR Martin",
// 	datePublished: "May 12, 1996",
// 	cover: ".."

// }

// console.log(book[lookup]);

//for (var prop in book) {
// 	console.log(book[prop]);
// }





