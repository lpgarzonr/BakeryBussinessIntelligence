//get sales from location
function getSalesFromAProvince(province){
	salesFromAProvince = [];
		province.regions.forEach(function (region) {
			region.cities.forEach(function (city) {
				city.stores.forEach(function (store) {
					store.sales.forEach(function (sale) {
						salesFromAProvince.push(sale);
					});
				});
			});
		});
	return salesFromAProvince;	
};

function getSalesFromARegion(region){
	salesFromARegion = [];
		region.cities.forEach(function (city) {
			city.stores.forEach(function (store) {
				store.sales.forEach(function (sale) {
					salesFromARegion.push(sale);
				});
			});
		});
	return salesFromARegion;	
};

function getSalesFromACity(city){
	salesFromACity = [];			
		city.stores.forEach(function (store) {
			store.sales.forEach(function (sale) {
				salesFromACity.push(sale);
			});
		});
	return salesFromACity;	
};
module.exports.getSalesFromACity = getSalesFromACity;
module.exports.getSalesFromARegion = getSalesFromARegion;
module.exports.getSalesFromAProvince = getSalesFromAProvince;