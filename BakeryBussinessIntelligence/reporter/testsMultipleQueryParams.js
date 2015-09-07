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
			 new Sale(new Cookie(), 3, 'small', 20, "2013-02-18T10:30:55", store1, 'female', 30), 
			 new Sale(new Biscuit(), 1, 'small', 50, "2014-02-18T10:30:55", store1, 'female', 32),
			 new Sale(new Biscuit(), 1, 'large', 10, "2015-01-18T10:30:55", store2, 'female', 45)
			  ];

QUnit.module("report services tests \n with multiple query params");

QUnit.test("computes the units sold, with a query containing the next params: \n product, package size, store, customer gender and age range ", function( assert ) {
	//arrange
	var query = new Query('biscuit', 'small', null, null, null, store1, 'female', new ranges.AgeRange(2,4), null);

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.totalUnits, 0);
});

QUnit.test("computes the sum of all sales prices, with a query containing the next params: \n product, package size, store, customer gender and age range ", function( assert ) {
	//arrange
	var query = new Query('biscuit', 'small', null, null, null, store1, 'female', new ranges.AgeRange(2,4), null);

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.sumOfSales, 0);
});

QUnit.test("computes the sum of all sales prices, with a query with given province and customer gender", function( assert ) {
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

	var query = new Query(null, null, provAndina, null, null, null, 'female', null, null);

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.sumOfSales, 60);
});

QUnit.test("computes the sum of all sales prices, with a query with given province and customer gender", function( assert ) {
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

	var query = new Query(null, null, provAndina, null, cityBta, null, 'male', null, null);

	//act
	var result = reporterService.generateReport(sales, query);

	//assert
	assert.equal(result.sumOfSales, 0);
});
