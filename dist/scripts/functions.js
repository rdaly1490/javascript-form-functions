function add(a, b) {
	if (typeof a !== "string" || typeof b !== "string" || a === "" || b === "") {
		throw "Invalid Input"
	}

	aInt = parseFloat(a);
	bInt = parseFloat(b);

	return aInt + bInt;
}