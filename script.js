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

function familyTree() {


	let Elisabeth = new person('Elisabeth', null)

	let Marj = new person('Marj', Elisabeth)
	let Rosanne = new person('Rosanne', Elisabeth)
	let Ruthanne = new person('Ruthanne', Elisabeth)
	let Donnie = new person('Donnie', Elisabeth)
	let Patricia = new person('Patricia', Elisabeth)

	let Kim = new person('Kim', Patricia)
	let John = new person('John', Kim)
	let Jamie = new person('Jamie', Kim)

	let people = [Elisabeth, Marj, Rosanne, Ruthanne, Donnie, Patricia, Kim, John, Jamie]

	let A = random(people)
	let B = random(people)

	let AFamily = A
	let Ageneration = []
	let ADepth = 0

	while (AFamily != null) {
		ADepth++
		Ageneration.push(AFamily.name)
		AFamily = AFamily.parent
	}

	let BFamily = B
  let Bgeneration = []
	let BDepth = 0

	while (BFamily != null) {
		BDepth++
    Bgeneration.push(BFamily.name)
		BFamily = BFamily.parent
	}

	if (A == B) {
		print('Person A and person B are the same person!')
	}

	print('person A lineage is ', Ageneration)
	print('A depth is ', ADepth)
  print('person B lineage is ', Bgeneration)
  print('B depth is ', BDepth)


  let ADiff = 0
  let BDiff = 0

	for (let j = 0; j < BDepth; j++) {
		for (let i = 0; i < ADepth; i++) {

			if (Ageneration[i] == Bgeneration[j]) {
        print(Ageneration[i],' is the most common ancestor')
			}
		}
	}
}
