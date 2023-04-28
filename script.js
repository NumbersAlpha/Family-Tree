class person {
	constructor(name, parent) {
		this.name = name
		this.parent = parent
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
  
  familyTree()
    }

function familyTree()  {

  
	let Elisabeth = new person('Elisabeth', null)
	
  let Marj = new person('Marj', Elisabeth)
	let Rosanne = new person('Rosanne', Elisabeth)
	let Ruthanne = new person('Ruthanne', Elisabeth)
	let Donnie = new person('Donnie', Elisabeth)
	let Patricia = new person('Patricia', Elisabeth)

	let Kim = new person('Kim', Marj)

  let John = new person('John', Kim)
	let Jamie = new person('Jamie', Kim)

	let people = [Elisabeth, Marj, Rosanne, Ruthanne, Donnie, Patricia, Kim, John, Jamie] 

  let A = random(people)


let ALineage = A
let generation = []
  
  while (ALineage != null)  {
   generation.push(ALineage.name)
    ALineage = ALineage.parent 
  }
  print(generation)
}
