function Query(productName, packageSize, province, region, city, store, customerGender, customerAgeRange, dateRange){
	this.productName = productName;
	this.packageSize = packageSize;
	this.province = province
	this.region = region;
	this.city = city;
	this.store = store;
	this.customerGender = customerGender;
	this.customerAgeRange = customerAgeRange;
	this.dateRange = dateRange;
};
module.exports = Query;