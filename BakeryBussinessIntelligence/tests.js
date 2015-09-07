var runner = require("./node_modules/qunit");
runner.setup({
    log: {
    	testing: true,
    	errors: true,
        globalSummary: true,
        tests: true
    }
});
runner.run({
    code : "./commons/ranges.js",
    tests : "./commons/tests.js"
});