
var numbers = [1,2,3];

// There is an iterator involved here.
// This code uses the map() function in JavaScript to create a new array 
var doubled = numbers.map(function(number){
    console.log('I came here...');
    return number * 2;
}
);

console.log(doubled)

console.log('-----ChatGPT-----');

// Sample array
const numbersX = [1, 2];

// Using map to create a new array by doubling each number
const doubledNumbers = numbersX.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4]

