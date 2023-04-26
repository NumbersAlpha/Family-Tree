class person {
	constructor(name, parent) {
		this.name = name
		this.parent = parent
	}
}
let people;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

	let Elisabeth = new person('Elisabeth', null)
	let Marj = new person('Marj', Elisabeth)
	let Rosanne = new person('Rosanne', Elisabeth)
	let Ruthanne = new person('Ruthanne', Elisabeth)
	let Donnie = new person('Donnie', Elisabeth)
	let Patricia = new person('Patricia', Elisabeth)

	let Kim = new person('Kim', Marj)
	let John = new person('John', Kim)
	let Jamie = new person('Jamie', Kim)

	let people = [
		Elisabeth, Marj, Rosanne, Ruthanne, Donnie, Patricia, Kim, John, Jamie
	]

	// let personA = Math.floor(random(0, people.length))
	// let personB = Math.floor(random(0, people.length))
	let personA = random(people)
	let personB = random(people)
	
	print('person A', personA.name, personA.parent.name)
	print('person B', personB)
// while(true) {
// 	let generation = 0
// 	generation++
// }
}