var product = require('./product.js');

QUnit.module( "product tests");
QUnit.test("throw an error trying to create a product that does not exist", function( assert ) {
	//assert
	assert.throws(
	    function() {
	      new product.Cake();
	    }
	  );
});
QUnit.test("createa biscuit product", function( assert ) {
	//arrange
	var biscuit = new product.Biscuit();

	//assert
	assert.equal(biscuit.type, 'biscuit');
});
QUnit.test("set the price of a product", function( assert ) {
	//arrange
	var biscuit = new product.Biscuit();
	//act
	biscuit.setPrice(20);
	//assert
	assert.ok(biscuit.price === 20);
});