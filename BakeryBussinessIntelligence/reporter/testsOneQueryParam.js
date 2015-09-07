var Sale = require('../sale/sale.js');
var product = require('../product/product.js');
var Query = require('./query.js');
var storeLocation = require('../store/storeLocation.js');
var reporterService = require('./reporterServices.js');
var ranges = require('../commons/ranges.js');
var Biscuit = product.Biscuit;
var Cookie = product.Cookie;
var Store = storeLocation.Store;
var City = storeLocation.City;
var Region = storeLocation.Region;
var Province = storeLocation.Province;

var store1 = new Store(1);
var store2 = new Store(2);
var sales = [new Sale(new Biscuit(), 2, 'small', 30, "1985-01-18T10:30:56", store1, 'female', 17),
			 new Sale(new Cookie(), 1, 'small', 50, "1985-01-18T10:30:55", store2, 'male', 16),
			 new Sale(new Biscuit(), 3, 'large', 20, "1986-01-18T10:30:55", store1, 'female', 15),
			 new Sale(new Biscuit(), 3, 'small', 20, "2013-02-18T10:30:55", store1, 'female', 2), 
			 new Sale(new Biscuit(), 1, 'small', 50, "2014-02-18T10:30:55", store2, 'female', 2),
			 new Sale(new Biscuit(), 1, 'large', 10, "2015-01-18T10:30:55", store2, 'female', 2)
			  ];

QUnit.module("report services tests \n with one query param");

QUnit.test("compute the units sold, with a query with given package size", function( assert ) {
	//arrange
	var query = new Query(null, 'small', null, null, null, null, null, null, null);

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.totalUnits, 7);
});

QUnit.test("compute the sum of all sales prices, with a query with given package size", function( assert ) {
	//arrange
	var query = new Query(null, 'small', null, null, null, null, null, null, null);

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.sumOfSales, 220);
});
QUnit.test("compute the units sold, with a query with given store", function( assert ) {
	//arrange
	var query = new Query(null, null, null, null, null, store2, null, null, null);

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.totalUnits, 3);
});

QUnit.test("compute the sum of all sales prices, with a query with given store", function( assert ) {
	//arrange
	var query = new Query(null, null, null, null, null, store2, null, null, null);

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.sumOfSales, 110);
});

QUnit.test("compute the units sold, with a query with given customer gender", function( assert ) {
	//arrange
	var query = new Query(null, null, null, null, null, null, 'male', null, null);

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.totalUnits, 1);
});

QUnit.test("compute the sum of all sales prices, with a query with given customer gender", function( assert ) {
	//arrange
	var query = new Query(null, null, null, null, null, null, 'male', null, null);

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.sumOfSales, 50);
});

QUnit.test("compute the units sold, with a query with given customer age range", function( assert ) {
	//arrange
	var query = new Query(null, null, null, null, null, null, null, new ranges.AgeRange(15,18), null);

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.totalUnits, 6);
});

QUnit.test("compute the sum of all sales prices, with a query with given customer age range", function( assert ) {
	//arrange
	var query = new Query(null, null, null, null, null, null, null, new ranges.AgeRange(15,18), null);

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.sumOfSales, 170);
});
QUnit.test("compute the units sold, with a query with given sale date range", function( assert ) {
	//arrange
	var query = new Query(null, null, null, null, null, null, null, null, new ranges.DateRange("1985-01-18T10:30:56","1986-01-18T10:30:55"));

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.totalUnits, 5);
});

QUnit.test("compute the sum of all sales prices, with a query with given sale date range", function( assert ) {
	//arrange
	var query = new Query(null, null, null, null, null, null, null, null, new ranges.DateRange("1985-01-18T10:30:56","1986-01-18T10:30:55"));

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.sumOfSales, 120);
});
QUnit.test("compute the units sold, with a query with given province", function( assert ) {
	//arrange
	var store1 = new Store(1);
	var store2 = new Store(2);
	var store3 = new Store(3);
	var cityBta = new City('Bogota');
	var cityByaca = new City('Boyaca');
	var regCundi = new Region('Cundinamarca');
	var provAndina = new Province('Andina');
	provAndina.addRegion(regCundi);
	regCundi.addCity(cityBta);
	regCundi.addCity(cityByaca);
	cityBta.addStore(store1);
	cityByaca.addStore(store2);
	store1.addSale(sales[0]);
	store2.addSale(sales[1]);
	var query = new Query(null, null, provAndina, null, null, null, null, null, null);

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.totalUnits, 3);
});

QUnit.test("compute the sum of all sales prices, with a query with given province", function( assert ) {
	//arrange
	var store1 = new Store(1);
	var store2 = new Store(2);
	var store3 = new Store(3);
	var cityBta = new City('Bogota');
	var cityByaca = new City('Boyaca');
	var regCundi = new Region('Cundinamarca');
	var provAndina = new Province('Andina');

	provAndina.addRegion(regCundi);
	regCundi.addCity(cityBta);
	regCundi.addCity(cityByaca);
	cityBta.addStore(store1);
	cityByaca.addStore(store2);
	store1.addSale(sales[0]);
	store2.addSale(sales[1]);

	var query = new Query(null, null, provAndina, null, null, null, null, null, null);

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.sumOfSales, 110);
});

