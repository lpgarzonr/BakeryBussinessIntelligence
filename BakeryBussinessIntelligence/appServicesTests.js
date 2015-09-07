var Sale = require('./sale/sale.js');
var product = require('./product/product.js');
var Query = require('./reporter/query.js');
var storeLocation = require('./store/storeLocation.js');
var reporterService = require('./reporter/reporterServices.js');
var ranges = require('./commons/ranges.js');
var appServices = require('./appServices.js');
var Biscuit = product.Biscuit;
var Cookie = product.Cookie;
var Store = storeLocation.Store;
var City = storeLocation.City;
var Region = storeLocation.Region;
var Province = storeLocation.Province;

inicializingStoreLocations();

var inputs = [new Sale(new Biscuit(), 3, 'large', 20, "1983-01-18T10:30:55", store1, 'female', 18),
            	new Sale(new Cookie(), 2, 'small', 30, "1985-01-18T10:30:55", store1, 'female', 25),
            	new Sale(new Cookie(), 1, 'small', 50, "1986-01-18T10:30:55", store2, 'male', 50),
              new Query('biscuit', 'large', provAndina, null, null, store1, 'female', new ranges.AgeRange(15,60), null),
            	new Query('cookie', 'small', provAndina, regAntq, cityBta, store1, 'female', new ranges.AgeRange(15,60), null),
            	new Query(null, null, null, null, null, null, 'female', null, null),
            	new Sale(new Biscuit(), 3, 'large', 20, "2001-01-18T10:30:55", store1, 'female', 22), 
            	new Sale(new Biscuit(), 1, 'small', 10, "2005-01-18T10:30:55", store2, 'male', 42),
            	new Sale(new Biscuit(), 1, 'large', 50, "2015-01-18T10:30:55", store2, 'female', 29),
              new Query(null, 'large', provAndina, regCundi, null, null, 'female', new ranges.AgeRange(20,30), new ranges.DateRange("2000-01-18T10:30:55","2015-01-18T10:30:55")),
            	new Query(null, 'large', provAndina, regCundi, null, null, 'female', new ranges.AgeRange(20,50), new ranges.DateRange("1985-01-18T10:30:55","2006-06-18T10:30:55"))
];	


QUnit.module( "BakeryBussinessItelligence aplication tests");
QUnit.test("return a result for each input query", function( assert ) {
  //act
  var result = appServices.computeInputs(inputs);

  //assert
  assert.equal(result.length,5);
});

QUnit.test("throw an error where a invalid input is inserted", function( assert ) {
  var invalidInput = [Biscuit()];
  assert.throws(
      function() {
        appServices.computeInputs(inputs.concat(invalidInput));
      }
    );
});

function inicializingStoreLocations(){
  
  //creating stores and assingning them to a city
    store1 = new Store(1);
    store2 = new Store(2);
    store3 = new Store(3);
    //create cities
    cityBta = new City('Bogota');
    cityBoy = new City('Boyaca');
    cityMed = new City('Medellin');  
    cityBta.addStore(store1);
    cityBoy.addStore(store2);
    cityMed.addStore(store3);

    //creating and population regions
    regCundi = new Region('Cundinamarca');
    regAntq = new Region('Antioquia');

    regCundi.addCity(cityBta);
    regCundi.addCity(cityBoy);
    regAntq.addCity(cityMed);

    //crating and populating provinces
    provAndina = new Province('Andina');
    provAndina.addRegion(regCundi);
    provAndina.addRegion(regAntq);
    provAndina.addRegion(regAntq);
};