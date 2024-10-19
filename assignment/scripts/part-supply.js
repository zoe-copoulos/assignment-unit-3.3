console.log('****** Part Supply *******');
// ***** REQUIRED FEATURES *********************************************
// For each question, be sure to use console.log statements to ensure that
// your code does what you expect!

// 1. Create a variable called 'partsNeeded' with a value of the number 40.

let partsNeeded = 40
console.log(partsNeeded);


// 2. Create a variable called 'supplyChanges' whose value is an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11.

let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log(supplyChanges);

// 3. Create a variable called 'secondItem' and assign it the value of the second
//    item in the 'supplyChanges' array.

let secondItem = supplyChanges[1];
console.log(secondItem);


// 4. The last value in the 'supplyChanges' array was added by mistake.
//    Remove it from the array and store it inside a new variable called 'removedItem'.

supplyChanges.pop()
let removedItem = 11

console.log(supplyChanges)
console.log(removedItem)


// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array

supplyChanges.push(25)
console.log(supplyChanges)

// 6. Create three new variables named 'positives', 'negatives', and
//    'zeroes' whose values are empty arrays. Then, write a for loop
//    that loops through the 'supplyChanges' array. For each iteration of
//    the loop:
//      - If the value is a positive number, push it into the 'positives' array.
//      - If the value is a negative number, push it into the 'negatives' array.
//      - If the value is a zero, push it into the 'zeroes' array.

let positives = [];
let negatives = [];
let zeroes = [];

// for loop

for(let i = 0; i < supplyChanges.length; i++) {
 positives.push[i];
}
console.log('positives', positives)

// end for

// this one just keeps getting me- assuming it is the same concept as what is stumping me in 3.1 and there must be some small fundamental thing I am totally missing


// ***** STRETCH GOALS *********************************************
// 7. Rewrite the 'for' loop from #6 as a 'for...of' loop. Instead of 'positives',
//    'negatives', and 'zeroes', create three new arrays named 'stretchPositives',
//    'stretchNegatives', and 'stretchZeroes'. 
console.log('7. Looping through supplyChanges to populate more arrays with positive, negative, and zero values:');


// 8. Create a variable called 'totalParts' and assign it a value of 0.
//    Then, write a loop that adds each value of the 'supplyChanges'
//    array to the 'totalParts' variable.
console.log('8. Looping through supplyChanges to calculate the sum:');

let totalParts = 0;




// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. There are 572
//    parts in total, and each box holds 7 parts.
//    Create two variables:
//      1. 'parts': Set its value to 572
//      2. 'boxesFilled': Set its value to 0
//    Use a 'while' loop to keep adding parts to boxes UNTIL
//    no more boxes can be filled. When the loop is finished,
//    the value of 'parts' should reflect how many parts are
//    "left over," and the value of 'boxesFilled' should reflect
//    how many boxes were filled.
console.log('9. Filling boxes with a "while" loop');

let parts = 572;
let boxesFilled = 0;

// while (parts > 0 {

// come back to this and figure out how 

// })


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    partsNeeded: typeof partsNeeded !== 'undefined' ? partsNeeded : undefined,
    supplyChanges: typeof supplyChanges !== 'undefined' ? supplyChanges : undefined,
    secondItem: typeof secondItem !== 'undefined' ? secondItem : undefined,
    removedItem: typeof removedItem !== 'undefined' ? removedItem : undefined,
    positives: typeof positives !== 'undefined' ? positives : undefined,
    negatives: typeof negatives !== 'undefined' ? negatives : undefined,
    zeroes: typeof zeroes !== 'undefined' ? zeroes : undefined,
    stretchPositives: typeof stretchPositives !== 'undefined' ? stretchPositives : undefined,
    stretchNegatives: typeof stretchNegatives !== 'undefined' ? stretchNegatives : undefined,
    stretchZeroes: typeof stretchZeroes !== 'undefined' ? stretchZeroes : undefined,
    totalParts: typeof totalParts !== 'undefined' ? totalParts : undefined,
    parts: typeof parts !== 'undefined' ? parts : undefined,
    boxesFilled: typeof boxesFilled !== 'undefined' ? boxesFilled : undefined,
  }
} catch (e) {
  // Do nothing
}
