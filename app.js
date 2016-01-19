// Just printing to the console
console.log("Hello World!!");

function add(num01, num02) {
	return num01+num02;
}

var theAns = add(2,2);
console.log("2 + 2 is " +theAns);

var name = "Jonny";
var age = 21;
var male = true;
var myArray = new Array();

if (age == 21) {
	console.log("You are still young " +name);
}

var o = new Object();

var anotherObject = {};

/* 
AS:
public class person {
	public var name:string;
	public var age:int;
	public var male:boolen;

	function person() {
		//default to female
		this.male = false;
	}

	public growOld():void {
		this.age ++;
	}
}

//Somewhere else
var p:Person = new person();
p.name = jonny;
p.age = 21;
p.male = true;

p.growOld();
*/
var person = {};
person.name = "jonny";
person.age = 21;
person.male = true;
person.growOld = function() {
	this.age++;
};

var anotherPerson = {
	name: "Tom",
	age: 25,
	male: false,
	growOld: function() {
		this.age++;
	}, 
	friends: ["Tom", "Pat"]
};

for (var i=0; i<10; i++) {
	console.log(anotherPerson.name + " is " + anotherPerson.age);
	anotherPerson.growOld();
}