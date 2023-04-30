# Family Tree Algorithm

## Idea

Given an array of all family members - with traits: 'name' and 'parent'.
Given person A and person B.

### Part One: Generating person A and B's arrays
The algorithm starts by making two arrays, one array for person A, and one array for person B. The point in generating these arrays is to create an lineage, and also increment a variable reponsible for depth; for the given person. This lineage would go back to the earliest common ancestor available, until there are no more parents.

After generating a lineage (array of parents) for each given person, the next part of the algorithm is to compare the arrays.
Comparing the arrays will have two steps, cycling person A's lineage (from person A), and cycling person B's lineage (from person B); with for statements.

### Part Two: Cycling person B's lineage
Person B's lineage is sorted with a for loop, example: for (let j = 0; j < BDepth; j++)   . Where BDepth is the variable responsible for person B's depth (calculated in part one) and j is used to cycle through person B's lineage.

### Part Three: Cycling person A's lineage
Person A's lineage is also sorted with a for loop, This time, inside of person B's for loop. example: for (let i = 0; i < ADepth; i++)    . Where ADepth is the variable responsible for person A's depth (calculated in part one) and i is used to cycle through person A's lineage.

### Part Three 1/2: Variable for closest relations
Even though Person A and B both have their own depth already, the point in part two and three is to find their **closest** common relative, not the **earliest**. this can be done by having two more depth variables; in this case, *ADiff* and *BDiff*. This could be shown as:

for (let j = 0; j < BDepth; j++) {
    BDiff++
		for (let i = 0; i < ADepth; i++) {
      ADiff++
      }
      
### Part Three 3/4: Relations
In this case, the values of ADiff and BDiff will affect their relations. The lower the *Diff*, the closer that person is to the most common relative.

## Pseudo Code
