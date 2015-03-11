var myDog= {
breed: "German Shepard",
name:"Buddy",
size:"large",
}
myDog.bark=function(){
	if(myDog.size==="large"){
		return "WOOF!";
	}else {
		return "woof.";
	}
};
myDog.description=function(){
	return "My dog's name is " + myDog.name + ". My dog is a " + myDog.breed + ". My dog is " + myDog.size +".";
}

console.log(myDog.description());
console.log(myDog.bark());