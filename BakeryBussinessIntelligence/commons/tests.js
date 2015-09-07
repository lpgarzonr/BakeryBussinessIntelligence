var ranges = require('./ranges.js');

QUnit.module( "ranges tests");
QUnit.test( "age range: A new range can be defined", function( assert ) {
	//act
	var ageRange = new ranges.AgeRange(2,3);

	//assert
	assert.equal((ageRange.minAgeInterval,ageRange.maxAgeInterval),(2,3));
});

QUnit.test( "age range: A error is throw if the min age or the max age is lower than 0", function( assert ) {
	//act
	var ageRange = new ranges.AgeRange(-2,2);

	//assert
	assert.equal(ageRange.err ,"The values should be upper than 0");
});

QUnit.test( "age range: A error is throw if the max date is lower than the min date", function( assert ) {
	//act
	var dateRange = new ranges.DateRange("1986-01-18T10:30:55","1985-01-18T10:30:55");

	//assert
	assert.equal(dateRange.err ,"Not valid interval parameters, the first value should be lower than the second value");
});