var expect = chai.expect;

describe("add", function() {
	it("should exist", function() {
		expect(add).to.not.be.undefined;
	});
	it("should return eight if I pass in two integers, 3 & 5", function() {
		expect(add("3", "5")).to.equal(8);
	});
	it("should return zero if I pss in two zero values", function() {
	expect(add("0", "0")).to.equal(0);
	});
	it("should throw an error is input is not string", function() {
	expect (function() { add("7", 5);}).to.throw("Invalid Input");
	});
});

