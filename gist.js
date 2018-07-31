// // ORIGINAL
// const dog = {
// name: 'Scout',
// breed: ['Husky', 'German Shepherd'],
// age: 4,
// happiness: 50,
// hunger: 10,
// energy: 100,
// };

// dog['feed'] = function (food) {
// if(dog.hunger - food > 0) {
//   dog.hunger -= food;
// } else {
//   dog.hunger = 0;
// }
// }

// dog['play'] = function(time) {
// if(dog.happiness + time < 100) {
//   dog.happiness += time;
// } else {
//   dog.happiness = 100;
// }

// if(dog.energy - time > 0) {
//   dog.energy -= time;
// } else {
//   dog.energy = 0;
// }
// }

// dog['nap'] = function(time) {
// if(dog.energy + time < 100) {
//   dog.energy += time;
// } else {
//   dog.energy = 100;
// }
// }

//Functional Class
// var extend = function(ob1, ob2){
// 	for(var key in ob2){
// 		ob1[key] = ob2[key]; 
// 	}
// }

// var Dog = function(name, breed,age,happiness,hunger,energy){
// var obj = { 
// 	name,
// 	breed,
// 	age,
// 	happiness,
// 	hunger,
// 	energy
// }

// extend(obj, Dog.methods);
// return obj
// };

// Dog.methods = {
// 	feed : function (food) {
// 		if(this.hunger - food > 0) {
// 		  this.hunger -= food;
// 		} else {
// 		  this.hunger = 0;
// 		}
// 	},

// 	play : function(time) {
// 		if(this.happiness + time < 100) {
// 		  this.happiness += time;
// 		} else {
// 		  this.happiness = 100;
// 		}

// 		if(this.energy - time > 0) {
// 		  this.energy -= time;
// 		} else {
// 		  this.energy = 0;
// 		}
// 	},

// 	nap : function(time) {
// 		if(this.energy + time < 100) {
// 		  this.energy += time;
// 		} else {
// 		  this.energy = 100;
// 		}
// 	}	
// }

// var scout = new Dog("Scout",['Husky', 'German Shepherd'],4,50,10,100);

// //Prototypal Classes

// var Dog = function(name, breed,age,happiness,hunger,energy){
// 	var obj = Object.create(Dog.methods); 
// 		obj.name = name,
// 		obj.breed = breed,
// 		obj.age = age,
// 		obj.happiness = happiness,
// 		obj.hunger = hunger,
// 		obj.energy= energy

// 	return obj;
// };

// Dog.methods = {
// 	feed : function (food) {
// 		if(this.hunger - food > 0) {
// 		  this.hunger -= food;
// 		} else {
// 		  this.hunger = 0;
// 		}
// 	},

// 	play : function(time) {
// 		if(this.happiness + time < 100) {
// 		  this.happiness += time;
// 		} else {
// 		  this.happiness = 100;
// 		}

// 		if(this.energy - time > 0) {
// 		  this.energy -= time;
// 		} else {
// 		  this.energy = 0;
// 		}
// 	},

// 	nap : function(time) {
// 		if(this.energy + time < 100) {
// 		  this.energy += time;
// 		} else {
// 		  this.energy = 100;
// 		}
// 	}	
// }	


// var scout = Dog("Scout",['Husky', 'German Shepherd'],4,50,10,100);
// scout.play(100)
// console.log(scout)

// Pseudoclassical Classes

// var Dog = function(name, breed,age,happiness,hunger,energy){
// 	this.name = name,
// 	this.breed = breed,
// 	this.age = age,
// 	this.happiness = happiness,
// 	this.hunger = hunger,
// 	this.energy= energy

// };

// Dog.prototype.feed = function (food) {
// 	if(this.hunger - food > 0) {
// 	  this.hunger -= food;
// 	} else {
// 	  this.hunger = 0;
// 	}
// }

// Dog.prototype.play = function(time) {
// 	if(this.happiness + time < 100) {
// 	  this.happiness += time;
// 	} else {
// 	  this.happiness = 100;
// 	}

// 	if(this.energy - time > 0) {
// 	  this.energy -= time;
// 	} else {
// 	  this.energy = 0;
// 	}
// }

// Dog.prototype.nap = function(time) {
// 	if(this.energy + time < 100) {
// 	  this.energy += time;
// 	} else {
// 	  this.energy = 100;
// 	}
// }	


// var scout = new Dog("Scout",['Husky', 'German Shepherd'],4,50,10,100);
// scout.play(70)
// console.log(scout)
