let string = "INDIA";

// Convert string to array
let arr = string.split("");

// Remove "IA" and add "ONESIA"
arr.splice(4, 2, "O", "N", "E", "S", "I", "A");

// Convert array back to string
let result = arr.join("");

// Display on webpage
document.getElementById("original").textContent = string;
document.getElementById("output").textContent = result;