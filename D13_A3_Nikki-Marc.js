function Bicycle(speeds, type, gender){
	this.speeds = speeds;
	this.type = type;
	this.gender = gender;
	this.ringBell = function(){
		return 'ring ring!';
	};
	this.describeBike = function(){
		return 'This is a ' + this.speeds + ' speed ' + this.gender + ' ' + type + ' bike.';
	};
};

var marcsBike = new Bicycle("21", "mountain", "mens");
var nikkisBike = new Bicycle("10", "road", "womens");

console.log(marcsBike.describeBike());
console.log(nikkisBike.describeBike());

