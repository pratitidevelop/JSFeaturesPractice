function Person(firstname, lastname, age, profession) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
	this.profession = profession;	
}

(function makeObjects() {
	var person1 = new Person("Prasanta", "Das",44,"Master of Craftsmen at Eastern RailWay");
	console.log(person1.age);
	// adding property to an object
	person1.middleName = "Kumar";
	console.log(person1.middleName)
	person1.getName = function() {
		return this.name;
	}
	person1.getProfession = function() {
		return this.profession;
	}
	console.log(person1.getProfession());
})()
