function AgeRange(minAgeInterval, maxAgeInterval){
	try{
	   validateIntervalParameters(minAgeInterval, maxAgeInterval);
	}catch(err){
		this.err = err;
		return err;
	}
	this.minAgeInterval = minAgeInterval;
	this.maxAgeInterval = maxAgeInterval;
};

function DateRange(minDateIntervalStr, maxDateIntervalStr){
	try{
	   validateIntervalParameters(new Date(minDateIntervalStr), new Date(maxDateIntervalStr));
	}catch(err){
		this.err = err;
	    return err;
	}
	this.minDateInterval = new Date(minDateIntervalStr);
	this.maxDateInterval = new Date(maxDateIntervalStr);
};

function validateIntervalParameters(minInterval, maxInterval){
	if(minInterval >= maxInterval){throw "Not valid interval parameters, the first value should be lower than the second value"};
	if(minInterval <= 0|| maxInterval <= 0){throw "The values should be upper than 0"};
};

module.exports.AgeRange = AgeRange;
module.exports.DateRange = DateRange;