var runner = require("./node_modules/qunit");
runner.setup({
    log: {
    	testing: true,
    	errors: true,
        globalSummary: true,
        tests: true
    }
});
runner.run([{
    code : "./store/storeLocation.js",
    tests : "./store/tests.js"
},{
    code : "./commons/ranges.js",
    tests : "./commons/tests.js"
},{
    code : "./sale/salesServices.js",
    tests : "./sale/tests.js"
},{
    code : "./product/product.js",
    tests : "./product/tests.js"
},{
    code : "./reporter/reporterServices.js",
    tests: ["./reporter/testsOneQueryParam.js", "./reporter/testsMultipleQueryParams.js"]
},{
    code : "./appServices.js",
    tests: "./appServicesTests.js"
}]);