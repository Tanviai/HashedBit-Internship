const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

// Filter numbers greater than 5
const result = inputArr.filter(num => num > 5);

// Display on webpage
document.getElementById("input").textContent = JSON.stringify(inputArr);
document.getElementById("output").textContent = JSON.stringify(result);