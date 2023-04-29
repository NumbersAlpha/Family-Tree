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

	let Kim = new person('Kim', Marj)
  	let Monica = new person('Monica', Marj)
  	let Martin = new person('Martin', Marj)
  	let Gabe = new person('Gabe', Marj)
  	let John = new person('John', Marj)
 	let Ben = new person('Ben', Marj)
 	let Jerome = new person('Jerome', Marj)
  

	let Johnny = new person('Johnny', Kim)
	let Jamie = new person('Jamie', Kim)
 	let Julia = new person('Julia', Kim)
  	let Phil = new person('Phil', Monica)
  	let Alley = new person('Alley', Monica)
 	let Anna = new person('Anna', Monica)
 	let Steven = new person('Steven', Monica)
 	let Ellane = new person('Ellane', Gabe)
 	let Jake = new person('Jake', Gabe)
 	let Veera = new person('Veera', Jerome)
 	let Precila = new person('Precila', Jerome)
	let Clarence = new person('Clarence', Jerome)

  	let Lincoln = new person('Lincoln', Phil)
  	let Mo = new person('Mo', Ellane)

	let people = [Elisabeth, Marj, Rosanne, Ruthanne, Donnie, Patricia, Kim, Monica, Martin, Gabe, John, Ben, Jerome, John, Jamie, Julia, Phil, Alley, Anna, Steven, Ellane, Jake, Veera, Precila, Clarence]

	let A = random(people)
	let B = random(people)

	let personA = A
	let ALineage = []
	let ADepth = 0

	while (personA != null) {
		ADepth++
		ALineage.push(personA.name)
		personA = personA.parent
	}

	let personB = B
  	let BLineage = []
	let BDepth = 0

	while (personB != null) {
		BDepth++
    		BLineage.push(personB.name)
		personB = personB.parent
	}
  
	print('person A lineage is ', ALineage)
	print('A depth is ', ADepth)
  	print('person B lineage is ', BLineage)
  	print('B depth is ', BDepth)
  
	if (A == B) {
		print('Person A and person B are the same person!')
	}
else  {
  let ADiff = 0
  let BDiff = 0

	for (let j = 0; j < BDepth; j++) {
   	BDiff++
		for (let i = 0; i < ADepth; i++) {
      	ADiff++
			if (A != B && ALineage[i] == BLineage[j]) {
        print('Person A is connected to person B by their generation ', ADiff)
        print('Person B is connected to person A by their generation ', BDiff)

        // if (ADiff == BDiff)
        
        return print(ALineage[i],' is the most common ancestor')
			}
		}
  ADiff = 0
	}
	}
}
