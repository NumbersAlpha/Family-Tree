# Family Tree Algorithm

## Idea

Create a class for class Person {constructor(name, parent)}.

Then create a string for each family member with their corresponding this.name = name and this.parent = parent.

To start the algorithm, use the for(;;){} function for the array of person A’s parents while incrementing the depth of the family tree.

Outside of the initial for(;;){}, create an if condition to check if person A and person B are the same person.

Create another for statement outside of the former: for(;;){} for(;;){}.

In the second statement, check to compare person B’s parents with A’s array:

Inside the second statement, increment count, this will be used to determine B’s distance from the common relative.

After ‘count’, add another for statement inside of the second statement “third statement”: for(;;){for(;;){}}.

The third statement will be used with ‘i’ from the second statement to increment B for B's parents and compare it to A’s algorithm.

If Person B (changed with a variable) is equal to any of A's people array, the algorithm should exit.

After the algorithm, the program will identify the relation between person A and B.

## Pseudo Code
