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
  	let Monicka = new person('Monicka', Marj)
  	let Martin = new person('Martin', Marj)
  	let Gabe = new person('Gabe', Marj)
  	let John = new person('John', Marj)
  	let Ben = new person('Ben', Marj)
  	let Jerome = new person('Jerome', Marj)
  
   //johnny
	let Johnny = new person('Johnny', Kim)
	let Jamie = new person('Jamie', Kim)
  	let Julia = new person('Julia', Kim)
  	let Phil = new person('Phil', Monicka)
  	let Alley = new person('Alley', Monicka)
  	let Anna = new person('Anna', Monicka)
  	let Steven = new person('Steven', Monicka)
  	let Ellane = new person('Ellane', Gabe)
  	let Jake = new person('Jake', Gabe)
  	let Veera = new person('Veera', Jerome)
  	let Precila = new person('Precila', Jerome)
  	let Clarence = new person('Clarence', Jerome)

  
  let Lincoln = new person('Lincoln', Phil)
  let Mo = new person('Mo', Ellane)

	let people = [Elisabeth, Marj, Rosanne, Ruthanne, Donnie, Patricia, Kim, Monicka, Martin, Gabe, John, Ben, Jerome, John, Jamie, Julia, Phil, Alley, Anna, Steven, Ellane, Jake, Veera, Precila, Clarence, Lincoln, Mo]

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
      if (ALineage[i] != BLineage[j])  {
        print('ALEXANDER JAYDEN VONG')
      }
      else  {
        print('Person A is connected to person B by their generation ', ADiff)
        print('Person B is connected to person A by their generation ', BDiff)

         //if (ADiff == BDiff)

        if (ADiff == 2 && BDiff == 2)  {
          print('Person A and person B are siblings')
        }
        else if (ADiff == 3 && BDiff == 3)  {
          print('Person A and person B are first cousins')
        }
        else if (ADiff == 4 && BDiff == 4)  {
          print('Person A and person B are second cousins')
        }
        else if (ADiff == 5 && BDiff == 5)  {
          print('Person A and person B are third cousins')
        }


        else if (ADiff == 1 && BDiff == 2)  {
          print('Person A is person B parent')
        }
        else if (ADiff == 2 && BDiff == 1)  {
          print('Person B is person A parent')
        }

        else if(ADiff == 1 && BDiff == 3)  {
          print('Person A is Person B Grandparent')
        }
        else if(ADiff == 3 && BDiff == 1)  {
          print('Person B is Person A Grandparent')
        }
        
        else if (ADiff == 1 && BDiff == 4)  {
          print('Person A is person B great grandparent')
          print('Person B is great grandchild to person A')
        }
        else if (ADiff == 4 && BDiff == 1)  {
          print('Person B is person A great grandparent')
          print('Person A is great grandchild to person B')
        }

        else if (ADiff == 1 && BDiff == 5)  {
          print('Person A is person B great great grandparent')
          print('Person B is great great grandchild to person A')
        }
        else if (ADiff == 5 && BDiff == 1)  {
          print('Person B is person A great great grandparent')
          print('Person A is great great grandchild to person B')
        }
          

        else if (ADiff == 2 && BDiff == 3)  {
          print('Person A is pibling to person B')
          print('Person B is nibling to person A')
        }    
        else if (ADiff == 3 && BDiff == 2)  {
          print('Person B is pibling to person A')
          print('Person A is nibling to person B')
        } 
        else if (ADiff == 2 && BDiff == 4)  {
          print('Person A is great pibling to person B')
          print('Person B is great nibling to person A')
        }
        else if (ADiff == 4 && BDiff == 2)  {
          print('Person B is great pibling to person A')
          print('Person A is great nibling to person B')
        }
        else if (ADiff == 2 && BDiff == 5)  {
          print('Person A is great great pibling to person B')
          print('Person B is great great nibling to person A')
        }
        else if (ADiff == 5 && BDiff == 2)  {
          print('Person B is great great pibling to person A')
          print('Person A is great great nibling to person B')
        }


        else if (ADiff == 3 && BDiff == 4)  {
          print('Person B is person A first cousin once removed')
        }
        else if (ADiff == 4 && BDiff == 3)  {
          print('Person A is person B first cousin once removed')
        }
        else if (ADiff == 3 && BDiff == 5)  {
          print('Person A is person B first cousin twice removed')
        }
        else if (ADiff == 5 && BDiff == 3)  {
          print('Person B is person A first cousin twice removed')
        }

          
        else if (ADiff == 4 && BDiff == 5)  {
          print('Person B is person A second cousin once removed')
        }
        else if (ADiff == 5 && BDiff == 4)  {
          print('Person A is person B second cousin once removed because of a interdimensional wormhole')
        }
        
      return print(ALineage[i],' is the most common ancestor')
      }
		}
  ADiff = 0
	}
  }
}
