var Sale = require('./sale/sale.js');
var Query = require('./reporter/query.js');
var reporterServices = require('./reporter/reporterServices.js');

function computeInputs(inputs){

	var salesToReport = [];
	var reports = [];

	inputs.forEach(function(input){
		if (input instanceof Sale){
			input.product.setPrice(input.price);
			input.store.addSale(input);
			salesToReport.push(input);		
		}else if (input instanceof Query){
			reports.push(reporterServices.generateReport(salesToReport, input));
		}
		else {
			throw Error("You should introduce a Query or a Sale");
		}
	});
	return reports;
};

//TODO: createa new location from a given sale
function createSaleLocation(){

};

module.exports.computeInputs = computeInputs;