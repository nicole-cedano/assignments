var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


// Remove the last item from the vegetable array.

var poppedVeg = vegetables.pop();
console.log(" vegetables: " , vegetables);

// Remove the first item from the fruit array.
var shiftFruits = fruit.shift();
console.log(" fruit: " , fruit)
// Find the index of "orange."
var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex)
// Add that number to the end of the fruit array.
var fruitNumber = fruit.push(1);
console.log( " fruit: " , fruit)
// Use the length property to find the length of the vegetable array.
console.log(vegetables.length)
// Add that number to the end of the vegetable array.
var vegNumber = vegetables.push(3);
console.log(" vegetables: " , vegetables)

// Put the two arrays together into one array. Fruit first. Call the new Array "food".

var food = fruit.concat(vegetables)
console.log( " food: " , food)
// Remove 2 elements from your new array starting at index 4 with one method.
var splicedFood = food.splice(4, 2 )
console.log( " food " , food)
// Reverse your array.
var reversedFood = food.reverse();
console.log( " food: " , food)

// Turn the array into a string and return it.

var strFood = food.join(" , ");
console.log(strFood)


