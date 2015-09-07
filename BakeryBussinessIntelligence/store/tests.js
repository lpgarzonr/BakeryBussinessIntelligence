	var storeLocation = require('./storeLocation.js');
	var Store = storeLocation.Store;
	var City = storeLocation.City;
	var Region = storeLocation.Region;
	var Province = storeLocation.Province;

QUnit.module( "store tests");

QUnit.test( "A new store can be create in a existing city", function( assert ) {
	//arrange
	var store6 = new Store(6)
	var cityBta = new City('Bogota');
	//act
	cityBta.addStore(store6);

	//assert
	assert.ok(containId(cityBta.stores, store6));
});

QUnit.test( "A store can be deteted from a existing city", function( assert ) {
	//arrange
	var store7 = new Store(7)
	var cityBta = new City('Bogota');
	
	//act
	cityBta.addStore(store7);
	cityBta.deleteStore(store7);

	//assert
	assert.ok(!containId(cityBta.stores, store7));
});

function containId(arr, obj) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === obj.id) {
            return true;
        }
    }
    return false;
};