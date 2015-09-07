	var storeLocation = require('./storeLocation.js');
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
  	cityMed = new City('Medellin');
	
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

QUnit.module( "store tests");

QUnit.test( "A new store can be create in a existing city", function( assert ) {
	//arrange
	var store6 = new Store(6)
	//var cityBta = new City('Bogota');
	//act
	cityBta.addStore(store6);

	//assert
	assert.ok(containId(cityBta.stores, store6));
});

QUnit.test( "A store can be deteted from a existing city", function( assert ) {
	//arrange
	var store7 = new Store(7)
	
	//act
	cityBta.addStore(store7);
	cityBta.deleteStore(store7);

	//assert
	assert.ok(!containId(cityBta.stores, store7));
});
/*
QUnit.test("Create a purchase made by a customer", function( assert ) {
	

	var inputs = [new Sale(new Biscuit(), 3, 'large', 20, "1986-01-18T10:30:55", store5, 'female', 3),
				  new Sale(new Cookie(), 2, 'small', 30, "1983-01-18T10:30:55", store1, 'female', 2),
				  new Sale(new Cookie(), 1, 'small', 50, "1985-01-18T10:30:55", store2, 'male', 2),
				  new Query('biscuit', 'large', provAndina, regBoliv, cityBta, store1, 'female', new AgeRange(2,4), null),
				  new Query(null, null, null, null, null, null, 'male', null, null),
				  new Sale(new Biscuit(), 3, 'small', 20, "1985-01-18T10:30:55", store1, 'female', 2), 
				  new Sale(new Biscuit(), 1, 'large', 10, "1985-01-18T10:30:55", store2, 'female', 2),
				  new Sale(new Biscuit(), 1, 'small', 50, "2005-01-18T10:30:55", store2, 'female', 2),
				  new Query(null, 'large', provAndina, regCundi, cityBta, store1, 'female', new AgeRange(1,2), new DateRange("1985-01-18T10:30:55","1986-01-18T10:30:55"))
				 ];	
	computeInputs(inputs);
	//assert
	assert.ok(ok);
});
*/
function containId(arr, obj) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === obj.id) {
            return true;
        }
    }
    return false;
};