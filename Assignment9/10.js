// Create an array of numbers
const numbers = [10, 20, 30, 40, 50];

// Function to calculate the sum using reduce()
function calculateSum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// Display the result
console.log(calculateSum(numbers));

// Output: 150