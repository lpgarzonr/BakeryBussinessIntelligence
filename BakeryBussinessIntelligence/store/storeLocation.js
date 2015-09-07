function Province(id){
	this.id = id;
	this.regions = [];
	this.addRegion= function(region){ //TODO: Publica
	    this.regions.push(region);
	};
};

function Region(id){
	this.id = id;
	this.cities = [];
	this.addCity = function(city){ //TODO: Publica
	    this.cities.push(city);
	};
};

function City(id) {
	this.id = id;
	this.stores = [];
	this.addStore = function(stor){ //TODO: Publica
	    this.stores.push(stor);
	};

	this.deleteStore = function (stor) {
   	for (var i = 0; i< this.stores.length; i++){
			if (this.stores[i].id == stor.id){
				this.stores.splice(i, 1);
			}
		}
 	};	
};

function Store(id) {
	this.id = id;
	this.sales = [];
	this.addSale = function(sale){ //TODO: Publica
	    this.sales.push(sale);
	};
};

module.exports.Store = Store;
module.exports.City = City;
module.exports.Region = Region;
module.exports.Province = Province;