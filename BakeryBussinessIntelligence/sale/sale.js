var Customer = require('../customer/customer.js');

function Sale(product, unitsSold, packageSize, price, dateString, store, customerGender, customerAge){
	this.product = product;
	this.unitsSold = unitsSold;
	this.packageSize = packageSize;
	this.price = price;
	this.date = new Date(dateString);
	this.store = store;
	this.customer = new Customer(customerGender, customerAge);
};
module.exports = Sale;