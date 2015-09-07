var ReportResponse = require('./reportResponse.js');
var salesServices = require('../sale/salesServices.js');

function generateReport(salesToReport, query){
	var filterSales = salesToReport;
		
		//execute Query
		if (query.province){
			filterSales = salesServices.getSalesFromAProvince(query.province);
		}

		if (query.region){
			filterSales = salesServices.getSalesFromARegion(query.region);
		} 

		if (query.city){
			filterSales = salesServices.getSalesFromACity(query.city);
		} 	

		if (query.dateRange){
			filterSales = filterSales.filter(function (sale) {
			  return sale.date <= query.dateRange.maxDateInterval &&
			         sale.date >= query.dateRange.minDateInterval;
			});
		} 
		if (query.customerGender) {
			filterSales = filterSales.filter(function (sale) {
			  return sale.customer.gender === query.customerGender;
			});	
		} 
		if (query.customerAgeRange) {
			filterSales = filterSales.filter(function (sale) {
			  return sale.customer.age <= query.customerAgeRange.maxAgeInterval &&
			  		 sale.customer.age >= query.customerAgeRange.minAgeInterval;
			});	
		}
		if (query.productName) {
			filterSales = filterSales.filter(function (sale) {
			  return sale.product.type === query.productName;
			});
		} 
		if (query.packageSize) {
			filterSales = filterSales.filter(function (sale) {
			  return sale.packageSize <= query.packageSize &&
			  		 sale.packageSize >= query.packageSize;
			});	
		}
		if (query.store) {
			filterSales = filterSales.filter(function (sale) {
			  return sale.store.id === query.store.id;
			});
		} 
	
	function _computeUnitsAndSume(salesToCount) {
		var unitsCounter = 0;
		var sumOfSales = 0;		
		salesToCount.forEach(function (saleToCount) {
			unitsCounter += saleToCount.unitsSold;
			sumOfSales += saleToCount.unitsSold*saleToCount.price;
		});    	
		return new ReportResponse(unitsCounter, sumOfSales);
  	};
  	return _computeUnitsAndSume(filterSales);
 };
 
module.exports.generateReport = generateReport;