
var getRandomNumber = function(min, max){
	var ourResult = Math.random() * (max-min) + min;
		ourResult = Math.round(ourResult);
		ourResult = Math.sqrt(ourResult);
		return ourResult;
}

console.log(getRandomNumber(1,20));


// round
// sqrt