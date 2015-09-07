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


  	store1 = new Store(1);
  	store2 = new Store(2);
  	store3 = new Store(3);
  	store4 = new Store(4);
  	store5 = new Store(5);

  	//create city
  	cityBta = new City('Bogota');
  	cityBoy = new City('Boyaca');
  	cityCart = new City('Cartagena');
  	cityMed = new City('MEdellin');
	
	// adding stores to each city
	cityBta.addStore(store1);
	cityBta.addStore(store2);
	cityBoy.addStore(store3);
	cityMed.addStore(store4);
	cityCart.addStore(store5);

  	//creating regions
  	regCundi = new Region('Cundinamarca');
  	regAntq = new Region('Antioquia');
  	regBoliv = new Region('Bolivar');

	regCundi.addCity(cityBta);
	regCundi.addCity(cityBoy);
	regAntq.addCity(cityMed);
	regBoliv.addCity(cityCart);
  	
  	//crating provinces
  	provAndina = new Province('Andina');
  	provCosta = new Province('Costa');

  	provAndina.addRegion(regCundi);
  	provAndina.addRegion(regAntq);
  	provCosta.addRegion(regBoliv);

var inputs = [new Sale(new Biscuit(), 3, 'large', 20, "1986-01-18T10:30:55", store5, 'female', 3),
	new Sale(new Cookie(), 2, 'small', 30, "1983-01-18T10:30:55", store1, 'female', 2),
	new Sale(new Cookie(), 1, 'small', 50, "1985-01-18T10:30:55", store2, 'male', 2),
	new Query('biscuit', 'large', provAndina, regBoliv, cityBta, store1, 'female', new ageRange(2,4), null),
	new Query(null, null, null, null, null, null, 'male', null, null),
	new Sale(new Biscuit(), 3, 'small', 20, "1985-01-18T10:30:55", store1, 'female', 2), 
	new Sale(new Biscuit(), 1, 'large', 10, "1985-01-18T10:30:55", store2, 'female', 2),
	new Sale(new Biscuit(), 1, 'small', 50, "2005-01-18T10:30:55", store2, 'female', 2),
	new Query(null, 'large', provAndina, regCundi, cityBta, store1, 'female', new ageRange(1,2), new dateRange("1985-01-18T10:30:55","1986-01-18T10:30:55"))
];	

var reportsResponses = appServices.computeInputs(inputs);
console.log(reportsResponses);
