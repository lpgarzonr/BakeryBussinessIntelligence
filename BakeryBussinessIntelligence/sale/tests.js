var Sale = require('./sale.js');
var storeLocation = require('../store/storeLocation.js');
var product = require('../product/product.js');
var salesServices = require('./salesServices.js');
var Biscuit = product.Biscuit;
var Store = storeLocation.Store;
var City = storeLocation.City;
var Region = storeLocation.Region;
var Province = storeLocation.Province;

QUnit.module("sales services tests");
QUnit.test("a list of sales is retrieved from a given city", function( assert ) {
	//arrange
	var store1 = new Store(1);
	var cityBta = new City('Bogota');
	var sale1 = new Sale(new Biscuit(), 3, 'large', 20, "1986-01-18T10:30:55", store1, 'female', 3);
	cityBta.addStore(store1);
	store1.addSale(sale1);

	//act
	var result = salesServices.getSalesFromACity(cityBta);

	//assert
	assert.strictEqual(sale1, result[0]);
});

QUnit.test("a list of sales is retrieved from a given province", function( assert ) {
	//arrange
	var store1 = new Store(1);
	var store2 = new Store(2);
	var store3 = new Store(3);
	var cityBta = new City('Bogota');
	var cityByaca = new City('Boyaca');
	var regCundi = new Region('Cundinamarca');
	var provAndina = new Province('Andina');
	var sale1 = new Sale(new Biscuit(), 3, 'large', 20, "1986-01-18T10:30:55", store1, 'female', 3);
	var sale2 = new Sale(new Biscuit(), 3, 'large', 20, "1986-01-18T10:30:55", store2, 'female', 3);
	var sale3 = new Sale(new Biscuit(), 3, 'large', 20, "1986-01-18T10:30:55", store3, 'female', 3);
	provAndina.addRegion(regCundi);
	regCundi.addCity(cityBta);
	regCundi.addCity(cityByaca);
	cityBta.addStore(store1);
	cityByaca.addStore(store2);
	store1.addSale(sale1);
	store2.addSale(sale2);

	//act
	var result = salesServices.getSalesFromAProvince(provAndina);

	//assert
	assert.strictEqual(result.length , 2);
});

QUnit.test("a list of sales is retrieved from a given region", function( assert ) {
	//arrange
	var store1 = new Store(1);
	var store2 = new Store(2);
	var store3 = new Store(3);
	var cityBta = new City('Bogota');
	var cityByaca = new City('Boyaca');
	var regCundi = new Region('Cundinamarca');
	var sale1 = new Sale(new Biscuit(), 3, 'large', 20, "1986-01-18T10:30:55", store1, 'female', 3);
	var sale2 = new Sale(new Biscuit(), 3, 'large', 20, "1986-01-18T10:30:55", store2, 'female', 3);
	var sale3 = new Sale(new Biscuit(), 3, 'large', 20, "1986-01-18T10:30:55", store3, 'female', 3);
	regCundi.addCity(cityBta);
	regCundi.addCity(cityByaca);
	cityBta.addStore(store1);
	cityByaca.addStore(store2);
	store1.addSale(sale1);
	store2.addSale(sale2);

	//act
	var result = salesServices.getSalesFromARegion(regCundi);

	//assert
	assert.ok(result.length === 2);
});
