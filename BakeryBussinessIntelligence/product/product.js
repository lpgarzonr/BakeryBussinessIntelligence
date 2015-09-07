//Start products model
function Product(type){
	this.price;
	this.type = type;
	this.setPrice = function (price) {
		this.price = price;
 	};
};

function Cookie() {};
Cookie.prototype =  new Product('cookies');
function Biscuit() {};
Biscuit.prototype =  new Product('biscuit');
function Bread() {};
Bread.prototype =  new Product('bread');

module.exports.Cookie = Cookie;
module.exports.Biscuit = Biscuit;
module.exports.Bread = Bread;