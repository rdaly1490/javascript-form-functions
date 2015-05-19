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

	var splitString = string.replace(" ","")
    var letterCount = {},
        length = splitString.length;
    splitString = splitString.split('').reverse();

    while (length--) letterCount[splitString[length]] = letterCount[splitString[length]] + 1 || 1;
    return letterCount;
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
		}
			if (counter === filterArray.length) {
			obj.push(myObjects[i][props]);
		}
	}
	console.log(obj);
	return obj
}





