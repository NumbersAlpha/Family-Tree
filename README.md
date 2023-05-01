# Family Tree Algorithm

## Idea

Given an array of all family members - with traits: 'name' and 'parent'.
Given person A and person B.

### Part One: Generating person A and B's arrays
The algorithm starts by making two arrays, one array for person A, and one array for person B. The point in generating these arrays is to create a lineage, and also increment a variable responsible for depth; for the given person. This lineage would go back to the earliest common ancestor available, until there are no more parents.

Person A's example ~ ALineage = [Tom(i=1), William(i=2), Vanessa(i=3), Squidward(i=4)]

Person B's example ~ BLineage = [Martin(j=1), Devon(j=2), William(j=3), Vanessa(j=4), Squidward(j=5)]

After generating a lineage (array of parents) for each given person, the next part of the algorithm is to compare the arrays.
Comparing the arrays will have two steps, cycling person A's lineage (from person A), and cycling person B's lineage (from person B); with for statements.

### Part Two: Cycling person B's lineage
Person B's lineage is sorted with a for loop, example: for (let j = 0; j < BDepth; j++)   . Where BDepth is the variable responsible for person B's depth (calculated in part one) and j is used to cycle through person B's lineage (look at person B's example).

### Part Three: Cycling person A's lineage
Person A's lineage is also sorted with a for loop, This time, inside of person B's for loop. example: for (let i = 0; i < ADepth; i++)    . Where ADepth is the variable responsible for person A's depth (calculated in part one) and i is used to cycle through person A's lineage (look at person A's example).

### Part Three 1/2: Variable for closest relations
Even though Person A and B both have their own depth already (i & j), it is used in their respective for loops.

To determine the closest relations, another variable be added (per person) outside the for loops, then incremented inside, in either part two(B) or three(A). 

For the example: both lineages have 3 related people, William, Vanessa, and Squidward. Again, the variables added will increment like in part one. The only difference is that when ALineage[i] == BLineage[j] the algorithm will return the most common ancestor. In the example's case, it would be William.

### Part Three 3/4: Relations
In this case, the values of ADiff and BDiff will affect their relations. The lower the *Diff*, the closer that person is to the most common relative. Relations will be covered with if and else if statements.

### Part Four: Future plans
- Use recursion instead of for loops
- Use switch statements instead of if and if else / develop a system with variables to indicate relations
- Figure out how to make the algorithm more efficent
- Add more people

## Pseudo Code

//Create class person{ 

//Create constructor(name, parent){

//Create functions: this.name = name this.parent = parent}}

//Given person A and person B with a name and parent

//Create an array for A:

//let personA equal A 

//let ALineage be the array

//let ADepth equal 0

//while personA is not null, 

//increment ADepth

//push personA.name into ALineage

//make personA equal personA.parent

//Create an array for B:

//let personB equal B

//let BLineage be the array

//let BDepth equal 0

//while personB is not null, 

//increment BDepth

//push personB.name into BLineage

//make personB equal personB.parent

//if A and B are equal, print(‘Person A and Person B are the same person!’)

// else, let ADiff=0, let BDiff=0

//for (let j = 0; j < BDepth; j++) {

//BDiff++

//for (let i = 0; i < ADepth; i++) {

//ADiff++

//if (ALineage[i] equals BLineage[j]) {return print(ALineage[i], ‘is the most common ancestor’)}

## Big O Notation
let n equal depth
part one: O(n)
part two + three: O(n^{2})

## Trade offs
The trade off in using for loops, to loop a certain amount of times; not indefinitely.
Using if and else if saved time thinking, but used a lot of lines and is limited.
Creating arrays may have organized the two random people's lineages, but created more complexity.
